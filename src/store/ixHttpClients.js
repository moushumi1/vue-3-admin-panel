import store from "@/store";
import axios from "axios";

axios.defaults.headers.common[
  "key"
] = `$a544AFD56654JHJH65465458233345asghfgsa5465ASF635dafdhhh45653llL85222dfasfd154555ASFDAFhabib$`;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
//eslint-disable-next-line prettier/prettier
store.subscribe((mutation) => {
  switch (mutation.type) {
    case "auth/SET_TOKEN":
      if (mutation.payload) {
        axios.defaults.headers.common["token"] = `${mutation.payload}`;
        localStorage.setItem("token", mutation.payload);
      } else {
        axios.defaults.headers.common["token"] = null;
        localStorage.removeItem("token");
      }

      break;

    default:
      if (mutation.payload) {
        let token = localStorage.getItem("token");
        axios.defaults.headers.common["token"] = `${token}`;
        //axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
      }
  }
});
