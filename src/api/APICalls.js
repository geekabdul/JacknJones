import React from 'react';
import { Utility } from '../util'
import * as APIConstant from "./APIConstants"
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
let FETCH_TIMEOUT = 60000;

export async function apiRequest(
    method,
    url,
    header,
    params,
    callback,
    callbackFailure,
    props) {

    Utility.getNetInfo().then(async isConnected => {
        if (!isConnected) {
            Utility.showNoInternetDialog();
            callbackFailure && callbackFailure();
            return;
        }
        let body;
        let queryParams;
        let query = '';
        var headers = {
            'x-client-id': APIConstant.X_CLIENT_ID,
            'x-client-secret': APIConstant.X_CLIENT_SECRET
            // 'device-type': Platform.OS == 'ios' ? 'ios' : 'android',
            // 'device-Id': DeviceInfo.getUniqueId(),
            // 'device-brand': DeviceInfo.getBrand(),
            // 'device-build': DeviceInfo.getBuildNumber(),
            // 'device-version': DeviceInfo.getSystemVersion(),
            // 'app-version': DeviceInfo.getVersion(),
            // 'apiv': APIConstant.API_VERSION,
            // 'lang_id': 1,
            // "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2Nzk5LCJtb2JpbGUiOiI5OTk5MDExMTExIiwibmFtZSI6IkthcmFuIFRoYWt1ciBBIiwic3Vic2NyaXB0aW9uX2lkcyI6IjEsMzUsNiwzNiIsImlhdCI6MTYzNTgzMTQ2OSwiZXhwIjoxNjM4NDIzNDY5fQ.1UxvsuLXpeA0-nE_Mkpik3Kwlkik28bgzPCKbKBkgQw',
        }
        // if (Platform.OS == 'android') {
        //     headers['device-model'] = DeviceInfo.getModel();
        // }
        // DeviceInfo.getDeviceName().then(deviceName => {
        //     headers['device-name'] = deviceName
        // });
        // DeviceInfo.getIpAddress().then(ip => {
        //     headers['ip-address'] = ip
        // })
        // var storeObject = new AsyncStore()
        // const values = await storeObject.multiGetAsyncValueInPersistStore([Constants.ACCESS_TOKEN, Constants.COUNTRY_CODE, Constants.LANGUAGE_CODE, Constants.DEALER_ID])
        // Utility.log('access_token ===>' + values[0][1])
        // Utility.log('countryCode===>' + values[1][1])
        // Utility.log('languageCode===>' + values[2][1])
        // if (header) {
        //     if (values[1][1]) {
        //         headers['Accept-Country'] = values[1][1]
        //     }
        //     if (values[2][1]) {
        //         headers['Accept-Language'] = values[2][1]
        //     }
        //     if (values[0][1]) {
        //         headers['Authorization'] = values[0][1]
        //     }
        // }
        // headers['Authorization'] = values[0][1]
        if (header && typeof (header) !== 'boolean') {
            headers = { ...headers, ...header }
        }
        else {
            headers = header
        }

        if (method === 'POST') {
            body = paramsToBody(params);
        } else if (method === 'GET') {
            queryParams = params;
            // query = paramsToUrlQueryParams(params);
        } else if (method === 'JSON_POST') {
            body = params;
            method = 'POST';
        }

        Utility.log("method : ", method);
        Utility.log("url : ", url + query);
        Utility.log("Params : ", JSON.stringify(params));
        Utility.log("BODY : ", JSON.stringify(body));
        Utility.log("headers : ", JSON.stringify(headers));

        axios({
            method: method,
            url: url,
            data: body,
            timeout: FETCH_TIMEOUT,
            params: queryParams,
            headers: headers
        }).then(function (response) {
            let resJson;
            // Utility.log("response :" + JSON.stringify(response));
            if (response.status === 200) {
                try {
                    resJson = response;
                } catch (e) {
                    resJson = '';
                    callbackFailure && callbackFailure();
                }
            } else {
                resJson = undefined;
                callbackFailure && callbackFailure();
            }
            return resJson;

        }).then((responseJson) => {
            if (!responseJson) {
                return;
            }
            // Utility.log("response==>", JSON.stringify(responseJson));
            if (responseJson.status === 200 && callback) { // Success
                callback(responseJson?.data);
                return;
            } else if (responseJson.status === 422 && callbackFailure) { // Validation Failure
                callbackFailure(responseJson?.data);
                return;
            } else if (responseJson.status == 400 && callbackFailure) { //
                callbackFailure(responseJson?.data);
                return;
            } else if (responseJson.status == 401 && callbackFailure) { // Auth Failed
                callbackFailure(responseJson?.data);
                return;
            } else if (responseJson.status == 404 && callbackFailure) { // error
                callbackFailure(responseJson?.data);
                return;
            }
            else {
                callbackFailure(responseJson?.data);
                return
            }
        }).catch((error) => {
            Utility.log("API Err===>", error);
            if (callbackFailure) {
                if (error && error?.response) {
                    callbackFailure(error?.response?.data);
                }
                else {
                    callbackFailure(error);
                }
            }

            if (props && error?.response?.data?.status === 401) { // Auth Failed
                Utility.showToast(error?.response?.data?.message)
                // Utility.logout(props)
                return
            }
            else if (error?.response?.status === 503) {
                Utility.showToast(error?.response?.data?.message)
            }
        })
    });
}

function paramsToBody(params) {
    if (!params || params.length < 1) {
        console.warn("response : empty params");
        return null;
    }

    const body = new FormData();
    for (let k in params) {
        body.append(k, params[k]);
    }
    return body;
}

function paramsToUrlQueryParams(params) {
    const esc = encodeURIComponent;
    let query = "";
    if (params) {
        query = '?';
        query += Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&');
    }
    return query;
}



// method, url, header, params, callback, callbackFailure, props

/* Check Force Update API Call */
export function getForceUpdate(callbackSuccess, callbackFailure, props) {
    let params = {
        app_version: 'Constants.VERSION_CODE'
    }
    apiRequest(
        'JSON_POST', APIConstant.CHECK_FORCE_UPDATE,
        null, params, callbackSuccess, callbackFailure, props, true, null, null, true
    )
}

/**
 *
 * @param mobileNum
 * @param callbackSuccess
 * @param callbackFailure
 */

/* Send OTP API Call */
export function sendOTP(mobileNum, callbackSuccess, callbackFailure, props) {

    let params = {
        mobile: mobileNum
    };
    let header = {};
    apiRequest(
        'JSON_POST', APIConstant.SEND_OTP, header, params,
        callbackSuccess, callbackFailure, props, true,
        null, null
    );
}

export function validateOTP(mobileNum, otp, callbackSuccess, callbackFailure, props) {
    let params = {
        mobile: mobileNum,
        otp: otp
    }
    let header = {};
    apiRequest(
        'JSON_POST', APIConstant.VALIDATE_OTP, header, params,
        callbackSuccess, callbackFailure, props, true,
        null, null
    );
}