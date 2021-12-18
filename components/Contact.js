import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const contactChat = [
  {
    name: "Kolour Koncepts Intl.",
    description: "Bangalore, India",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mJOI2TI2ItPqX_dt6BzhG3nsJY3BvMkDo7-zNy80m90nJA6nOH8ByVTOav8tKls4vCM&usqp=CAU",
  },
  {
    name: "Apparel Promoters",
    description: "Chittagong, Bangladesh",
    photo:
      "https://image.slidesharecdn.com/william-180528200951/95/apparel-promoters-ltd-for-internship-report-8-638.jpg?cb=1527538455",
  },
  {
    name: "YJC China Co.",
    description: "Guangzhou, China",
    photo:
      "https://news.cgtn.com/news/2021-09-19/Cash-strapped-Evergrande-starts-repaying-investors-with-property-13GLOO41YFG/img/c8c77c79194a4fd48b8568a701231110/c8c77c79194a4fd48b8568a701231110.jpeg",
  },
  {
    name: "Smart Tekstil",
    description: "Instanbul, Turkey",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMXe26ouAuaIYlssaW_Kpi9mb_p6sbTRiBMwgRTf7SdG3yxnGNMdzfSmWy-UdvHM_xbg&usqp=CAU",
  },
  {
    name: "Khimjee Industries Ltd.",
    description: "Delhi, India",
    photo:
      "https://infrastructure.khimji.com/wp-content/uploads/2020/02/Industrial-Workshops1-businee-inside-banner.jpg",
  },
  {
    name: "C and S Medical Equipment Group",
    description: "Phnom Penh, Cambodia",
    photo:
      "https://content3.jdmagicbox.com/comp/bhopal/i4/0755px755.x755.170210123506.c2i4/catalogue/c-s-medical-store-ayodhya-nagar-bhopal-chemists-34wjt1x-250.jpg",
  },
  {
    name: "Sara Footwear Co. Ltd.",
    description: "Bangalore, India",
    photo:
      "https://i.pinimg.com/originals/80/40/14/8040149669843a6af0e4a8f245ff7bd6.png",
  },
];

const Contact = () => {
  return (
    <View style={styles.container}>
      {contactChat.map((contact, index) => (
        <View>
          <View key={index} style={styles.row}>
            {/* Image */}

            <Image source={{ uri: contact.photo }} style={styles.image} />

            {/* Text */}
            <View>
              <Text style={styles.text}>{contact.name}</Text>
              <Text style={styles.description}>{contact.description}</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#BDBDBD",
              margin: 10,
              borderBottomWidth: 1,
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  text: {
    color: "black",
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: "500",
  },
  description: {
    color: "#858585",
    paddingLeft: 15,
    fontSize: 13,
  },
  image: {
    marginLeft: 10,
    width: 55,
    height: 55,
    borderRadius: 50,
  },
});
