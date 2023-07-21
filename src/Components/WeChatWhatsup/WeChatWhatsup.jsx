import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import logo from '../../assets/ProductImage/logo.png'

const WeChatWhatsup = () => {
  return (
    <WhatsAppWidget
      phoneNo="8801765896545"
      position="left"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={true}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="62"
      iconColor="#f7941d"
      iconBgColor="#efe9e5"
      headerIcon={logo}
      headerIconColor="#f7941d"
      headerTxtColor="white"
      headerBgColor="#f7941d"
      headerTitle="Gibs hornet"
      headerCaption="Online"
      bodyBgColor="#bbb"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#1f2937"
      placeholder="Type a message.."
      btnBgColor="#f7941d"
      btnTxt="Start Chat"
      btnTxtColor="white"
    />
  );
};

export default WeChatWhatsup;
