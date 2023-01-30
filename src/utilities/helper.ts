import axios from "axios";

// export const getRequestHeaders = () => {
//     return {
//         Authorization: getLocalStorage('b64'),
//         Oauth2: getLocalStorage('Oauth2'),
//         'User-Authorization': getLocalStorage('user_token'),
//     };
// };

// export const axiosGetWrapper = (URL, params) => {
//     return axios.get(URL, {
//         headers: getRequestHeaders(),
//         params,
//     });
// };

// export const axiosPostWrapper = (URL, data, headers = null, params) => {
//     return axios.post(
//         URL,
//         {
//             ...data,
//         },
//         {
//             headers: headers || getRequestHeaders(),
//             params,
//         }
//     );
// };

// export const axiosPutWrapper = (URL, data) => {
//     return axios.put(
//         URL,
//         {
//             ...data,
//         },
//         {
//             headers: getRequestHeaders(),
//         }
//     );
// };

// export const axiosPatchWrapper = (URL, data) => {
//     return axios.patch(
//         URL,
//         {
//             ...data,
//         },
//         {
//             headers: getRequestHeaders(),
//         }
//     );
// };

// export const axiosDeleteWrapper = (URL, data) => {
//     return axios.delete(URL, {
//         headers: getRequestHeaders(),
//         data,
//     });
// };
