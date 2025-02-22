import axios from "axios";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.tokenName = "lifetracker_token";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (error) {
      console.error({ errorResponse: error.response });
      const message = error?.response?.data?.error?.message;
      return { data: null, error: message || String(error) };
    }
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` });
  }

  async getNutrition() {
    return await this.request({ endpoint: `nutrition/`, method: `GET` });
  }
  async getSleep() {
    return await this.request({ endpoint: `sleep/`, method: `GET` });
  }
  async getExercise() {
    return await this.request({ endpoint: `exercise/`, method: `GET` });
  }

  async createPost(data, point) {
    return await this.request({
      endpoint: point + `/`,
      method: `POST`,
      data: data,
    });
  }

  async loginUser(credentials) {
    return await this.request({
      endpoint: `auth/login`,
      method: `POST`,
      data: credentials,
    });
  }

  async signupUser(credentials) {
    console.log(
      "sign up user in apiClient is reached, with credentials: " + credentials
    );
    return await this.request({
      endpoint: `auth/register`,
      method: `POST`,
      data: credentials,
    });
  }
}

// export default new ApiClient("https://lifetracker-4life-daniel.herokuapp.com");
export default new ApiClient(
  "http://localhost:3001"

  // process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001"
);
