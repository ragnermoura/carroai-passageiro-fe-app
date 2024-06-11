import axios from "axios";
import { http } from "../config";

// alterar essa estrutura para se adequar ao backend
export default {
  emailLogin: async (youEmail, youPass) => {
    try {
      const response = await http.post(
        "/login",
        {
          email: youEmail,
          senha: youPass,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  phoneLogin: async (youTelefone, youPass) => {
    try {
      const response = await http.post(
        "/login",
        {
          phone: youTelefone,
          senha: youPass,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  emailRegister: async (emailField, passwordField, nomeField) => {
    try {
      const response = await http.post(
        "/usuario/cadastrar",
        {
          nome: nomeField,
          email: emailField,
          senha: passwordField,
          // avatar: "default",
          // id_nivel: 3,
          // id_status: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  PhoneRegister: async (telefoneField, passwordField, nomeField) => {
    try {
      const response = await http.post(
        "/usuario/cadastrar",
        {
          nome: nomeField,
          phone: telefoneField,
          senha: passwordField,
          // avatar: "default",
          // id_nivel: 3,
          // id_status: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  sendValidationCode: async (id, code) => {
    try {
      const response = await http.post(
        `/usuario/verifica-code`,
        {
          id_user: id,
          code: code,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      );
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },

  getPerfil: async () => {
    try {
      const response = await http.get("/usuario", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
      });
      return response;
    } catch (error) {
      return error.response || error.message || error;
    }
  },
};
