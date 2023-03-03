const LocalStorageService = (function () {
  function _setToken(token) {
    localStorage.setItem("access_token", JSON.stringify(token));
  }

  function _getAccessToken() {
    let token = localStorage.getItem("access_token");
    return token;
  }

  function _clearToken() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  function _logout() {
    localStorage.clear();
  }

  function _getlocalstoragedata() {
    let data = localStorage.getItem("access_data");
    let changedata = JSON.parse(data);
    return changedata;
  }

  function _setlocalstoragedata(data) {
    localStorage.setItem("access_data", JSON.stringify(data));
  }

  return {
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
    logout: _logout,
    getlocalstoragedata: _getlocalstoragedata,
    setlocalstoragedata: _setlocalstoragedata,
  };
})();
export default LocalStorageService;
