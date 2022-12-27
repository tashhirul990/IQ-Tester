import { showMessage, hideMessage } from "react-native-flash-message";
const flush = (msg, type) => {
  /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
  showMessage({
    message: msg,
    type: type,
    duration: 2500,
    floating: true,
  });
};

export default flush;

/*
        The type attribute set the type and color of your flash message, 
        default options are "success" (green), "warning" (orange), 
        "danger" (red), "info" (blue) and "default" (gray). 
        By default all of the messages will be displayed with transitions 
        and with autoHide after 1850 ms enabled
  */
