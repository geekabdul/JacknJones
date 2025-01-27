'use strict';
// changeType = 1 when click 2 when scroll
var React = require('react');
import { Component } from 'react';
import { PropTypes } from 'prop-types';

var ReactNative = require('react-native');
var {
    Dimensions,
    Text,
    View,
    TouchableOpacity,
    PanResponder,
    Animated,
    StyleSheet,
} = ReactNative;

var StaticRenderer = require('react-native/Libraries/Components/StaticRenderer');
var TimerMixin = require('react-timer-mixin');

var DefaultViewPageIndicator = require('./DefaultViewPageIndicator');
var deviceWidth = Dimensions.get('window').width;
var ViewPagerDataSource = require('./ViewPagerDataSource');

class ViewPager extends Component {
    // mixins: [TimerMixin]

    static DataSource = ViewPagerDataSource

    // propTypes: {
    //     ...PropTypes,
    //     //dataSource: PropTypes.instanceOf(ViewPagerDataSource).isRequired,
    //     renderPage: PropTypes.func.isRequired,
    //     onChangePage: PropTypes.func,
    //     //renderPageIndicator: PropTypes.oneOfType([
    //     //  PropTypes.func,
    //     //  PropTypes.bool
    //     //]),
    //     isLoop: PropTypes.bool,
    //     locked: PropTypes.bool,
    //     autoPlay: PropTypes.bool,
    //     animation: PropTypes.func,
    //     initialPage: PropTypes.number,
    // }

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            viewWidth: 0,
            scrollValue: new Animated.Value(0)
        };
    }

    static defaultProps = {
        isLoop: false,
        locked: false,
        animation: function(animate, toValue, gs) {
            return Animated.spring(animate,
                {
                    toValue: toValue,
                    friction: 10,
                    tension: 50,
                    useNativeDriver: false,
                })
        },
    }

    fling

    UNSAFE_componentWillMount() {
        this.childIndex = 0;
        var claimResponder = (e, gestureState) => {
            if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy) && Math.abs(gestureState.dx) > 20) {
                if (this.props.locked !== true && !this.fling) {
                    this.props.hasTouch && this.props.hasTouch(true);
                    return true;
                }
            }
        }

        var release = (e, gestureState) => {
            var relativeGestureDistance = gestureState.dx / deviceWidth,
                //lastPageIndex = this.props.children.length - 1,
                vx = gestureState.vx;

            var step = 0;
            if (relativeGestureDistance < -0.5 || vx <= -0.4) {
                step = 1;
            } else if (relativeGestureDistance > 0.5 || vx >= 0.4) {
                step = -1;
            }

            this.props.hasTouch && this.props.hasTouch(false);

            this.movePage(step, gestureState);
        }

        this._panResponder = PanResponder.create({
            // Claim responder if it's a horizontal pan
            onStartShouldSetPanResponder: claimResponder,
            onStartShouldSetPanResponderCapture: claimResponder,
            onMoveShouldSetPanResponderCapture: claimResponder,
            onMoveShouldSetPanResponder: claimResponder,

            // Touch is released, scroll to the one that you're closest to
            onPanResponderGrant: release,
            onPanResponderRelease: release,
            onPanResponderTerminate: release,

            // Dragging, move the view with the touch
            onPanResponderMove: (e, gestureState) => {
                var dx = gestureState.dx;
                var offsetX = -dx / this.state.viewWidth + this.childIndex;
                this.state.scrollValue.setValue(offsetX);
            },
        });

        if (this.props.isLoop) {
            this.childIndex = 1;
            this.state.scrollValue.setValue(1);
        }
        if(this.props.initialPage){
            var initialPage = Number(this.props.initialPage);
            if (initialPage > 0) {
                this.goToPage(initialPage, false);
            }
        }
    }

    componentDidMount() {
        if (this.props.autoPlay) {
            this._startAutoPlay();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.autoPlay) {
            this._startAutoPlay();
        } else {
            if (this._autoPlayer) {
                this.clearInterval(this._autoPlayer);
                this._autoPlayer = null;
            }
        }

        if (nextProps.dataSource) {
            var maxPage = nextProps.dataSource.getPageCount() - 1;
            var constrainedPage = Math.max(0, Math.min(this.state.currentPage, maxPage));
            this.setState({
                currentPage: constrainedPage,
            });

            if (!nextProps.isLoop) {
                this.state.scrollValue.setValue(constrainedPage > 0 ? 1 : 0);
            }

            this.childIndex = Math.min(this.childIndex, constrainedPage);
            this.fling = false;
        }
        if(nextProps.changeType  && nextProps.changeType == 1){
            if(nextProps.initialPage){
                var initialPage = Number(nextProps.initialPage);
                if (initialPage >= 0) {
                    this.goToPage(initialPage, false);
                }
            }
            else {
                this.goToPage(0, false);
            }
        }

    }

    _startAutoPlay() {
        if (!this._autoPlayer) {
            this._autoPlayer = this.setInterval(
                () => {this.movePage(1);},
                5000
            );
        }
    }

    goToPage(pageNumber, animate = true) {

        var pageCount = this.props.dataSource.getPageCount();
        if (pageNumber < 0 || pageNumber >= pageCount) {
            console.error('Invalid page number: ', pageNumber);
            return
        }

        var step = pageNumber - this.state.currentPage;
        this.movePage(step, null, animate);
    }

    movePage(step, gs, animate = true) {
        var pageCount = this.props.dataSource.getPageCount();
        var pageNumber = this.state.currentPage + step;
        if (this.props.isLoop) {
            pageNumber = pageCount == 0 ? pageNumber = 0 : ((pageNumber + pageCount) % pageCount);
        } else {
            pageNumber = Math.min(Math.max(0, pageNumber), pageCount - 1);
        }

        const moved = pageNumber !== this.state.currentPage;
        const scrollStep = (moved ? step : 0) + this.childIndex;
        const nextChildIdx = (pageNumber > 0 || this.props.isLoop) ? 1 : 0;

        const postChange = () => {
            this.fling = false;
            this.childIndex = nextChildIdx;
            this.state.scrollValue.setValue(nextChildIdx);
            this.setState({
                currentPage: pageNumber,
            });
        };

        if (animate) {
            this.fling = true;
            this.props.animation(this.state.scrollValue, scrollStep, gs)
                .start((event) => {
                    if (event.finished) {
                        postChange();
                    }
                    moved && this.props.onChangePage && this.props.onChangePage(pageNumber);
                });
        } else {
            postChange();
            moved && this.props.onChangePage && this.props.onChangePage(pageNumber);
        }
    }

    getCurrentPage() {
        return this.state.currentPage;
    }

    renderPageIndicator(props) {
        if (this.props.renderPageIndicator === false) {
            return null;
        } else if (this.props.renderPageIndicator) {
            return React.cloneElement(this.props.renderPageIndicator(), props);
        } else {
            return (
                <View style={styles.indicators}>
                    <DefaultViewPageIndicator {...props} />
                </View>
            );
        }
    }

    _getPage(pageIdx, loop = false ) {
        var dataSource = this.props.dataSource;
        var pageID = dataSource.pageIdentities[pageIdx];
        return (
            <StaticRenderer
                key={'p_' + pageID + (loop ? '_1' : '')}
                shouldUpdate={true}
                render={this.props.renderPage.bind(
                    null,
                    dataSource.getPageData(pageIdx),
                    pageID,
                    this.state.currentPage
                )}
            />
        );
    }

    render() {
        var dataSource = this.props.dataSource;
        var pageIDs = dataSource.pageIdentities;

        var bodyComponents = [];

        var pagesNum = 0;
        var hasLeft = false;
        var viewWidth = this.state.viewWidth;

        if(pageIDs.length > 0 && viewWidth > 0) {
            // left page
            if (this.state.currentPage > 0) {
                bodyComponents.push(this._getPage(this.state.currentPage - 1));
                pagesNum++;
                hasLeft = true;
            } else if (this.state.currentPage == 0 && this.props.isLoop) {
                bodyComponents.push(this._getPage(pageIDs.length - 1, true));
                pagesNum++;
                hasLeft = true;
            }

            // center page
            bodyComponents.push(this._getPage(this.state.currentPage));
            pagesNum++;

            // right page
            if (this.state.currentPage < pageIDs.length - 1) {
                bodyComponents.push(this._getPage(this.state.currentPage + 1));
                pagesNum++;
            } else if (this.state.currentPage == pageIDs.length - 1 && this.props.isLoop) {
                bodyComponents.push(this._getPage(0, true));
                pagesNum++;
            }
        }

        var sceneContainerStyle = {
            width: viewWidth * pagesNum,
            flex: 1,
            flexDirection: 'row'
        };

        // this.childIndex = hasLeft ? 1 : 0;
        // this.state.scrollValue.setValue(this.childIndex);
        var translateX = this.state.scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [0, -viewWidth]
        });

        return (
            <View style={{flex: 1}}
                  onLayout={(event) => {
                      // console.log('ViewPager.onLayout()');
                      var viewWidth = event.nativeEvent.layout.width;
                      if (!viewWidth || this.state.viewWidth === viewWidth) {
                          return;
                      }
                      this.setState({
                          currentPage: this.state.currentPage,
                          viewWidth: viewWidth,
                      });
                  }}
            >

                <Animated.View style={[sceneContainerStyle, {transform: [{translateX}]}]}
                               {...this._panResponder.panHandlers}>
                    {bodyComponents}
                </Animated.View>

                {this.renderPageIndicator({goToPage: this.goToPage,
                    pageCount: pageIDs.length,
                    activePage: this.state.currentPage,
                    scrollValue: this.state.scrollValue,
                    scrollOffset: this.childIndex,
                })}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    indicators: {
        flex: 1,
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
    },
});

module.exports = ViewPager;