import apiClient from "../api/client";

export default {
  async signIn(tenanty, email, password) {
    const res = await apiClient.post("/user/token", {
      tenanty,
      email,
      password,
    });

    if (res.status == 200) {
      await this.setUserParams(res.data.data);
      return true;
    }
    return false;
  },

  async setUserParams(params) {
    await localStorage.setItem("userparams", params);
  },
  
  async getUserParams() {
    return localStorage.getItem("userparams");
  },

  async signUp(tenanty, email, name, password, confirmPassword) {
    const res = await apiClient.post("/User/register", {
      tenanty,
      email,
      name,
      password,
      confirmPassword,
    });
    if (res.status == 200) {
      return true;
    } else {
      return false;
    }
  },

  async signOut() {
    localStorage.clear();
  },
};
