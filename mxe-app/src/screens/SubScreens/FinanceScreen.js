import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import ColorTheme from "../../theme/colorTheme";
import { MaterialIcons } from "@expo/vector-icons";
import SmallCircleContainer from "../../components/SmallCircleContainer";
import exchnageImg from "../../assets/exchange.png";
import arrowUpRightImg from "../../assets/arrow-up-right.png";
import arrowDownLeftImg from "../../assets/arrow-down-left.png";
import chevronDropDownImg from "../../assets/chevron-down.png";
import backgountImg from "../../assets/blavkimg.jpg";
import dividerImg from "../../assets/Divider.png";
import pencilImg from "../../assets/pencil.png";
import user02Img from "../../assets/user-02.png";
import payBillImg from "../../assets/invoice.png";
import exchnage02 from "../../assets/exchangetwo.png";
import { ww } from "../../../responsive";
import HomeCarouselCard from "../../components/HomeCarouselCard";
import Carousel from "react-native-reanimated-carousel";

const FinanceScreen = () => {
  const width = Dimensions.get("window").width;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const totalSlides = 5;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    setCurrentIndex(
      Math.round(contentOffsetX / Dimensions.get("window").width)
    );
    setCurrentPage(currentIndex);
  };

  const renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < totalSlides; i++) {
      indicators.push(
        <View
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            margin: 4,
            backgroundColor: currentPage === i ? "black" : "gray", // Change colors based on current page
          }}
        />
      );
    }
    return indicators;
  };

  return (
    <View  style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", gap: ww(8) }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 32,
            height: 32,
            borderRadius: 16,
            marginRight: 11,
            backgroundColor: ColorTheme.black,
            position: "relative",
          }}
        >
          <MaterialIcons
            name="verified"
            color={ColorTheme.lightBlue2}
            size={18}
            style={{ position: "absolute", top: -3, right: -10 }}
          />
          <MaterialIcons name="person" size={16} color={ColorTheme.white} />
        </View>
        <View
          style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Welcome Odafe
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              padding: 3,
              paddingHorizontal: 10,
              backgroundColor: ColorTheme.lightGray2,
            }}
          >
            <Text style={{ fontSize: 12 }}>@odafe-ui</Text>
          </View>
        </View>
      </View>

      {/** user dasboard */}
      <View
        style={{
          borderRadius: 40,
          marginTop: 24,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: 284,
          width: "100%",
        }}
      >
        <ImageBackground
          source={backgountImg}
          resizeMode="cover"
          style={{
            flex: 1,
            padding: 16,
            borderRadius: 40,
            width: 361,
            height: 284,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/**ACCOUNT BALANCE TEXT AND ICON */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ marginRight: 16, color: ColorTheme.darkGray }}>
              Account Balance
            </Text>
            <MaterialIcons
              name="visibility"
              size={24}
              style={{ color: ColorTheme.white }}
            />
          </View>

          {/**amount and dropdown */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginRight: 16,
                color: ColorTheme.white,
                fontSize: 32,
                fontWeight: "400",
              }}
            >
              ₦46,000.00
            </Text>
            <Image
              source={chevronDropDownImg}
              style={{ width: 24, height: 24 }}
            />
          </View>

          {/************************************* transactioins row **********************/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <SmallCircleContainer
                height={56}
                width={56}
                borderRadius={26}
                backgroundColor={ColorTheme.darkGray3}
                children={
                  <Image
                    source={arrowDownLeftImg}
                    style={{ width: 32, height: 32 }}
                  />
                }
              />
              <Text
                style={{
                  color: ColorTheme.white,
                  fontSize: 12,
                  fontWeight: "700",
                  marginTop: 5,
                }}
              >
                Deposit
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <SmallCircleContainer
                height={56}
                width={56}
                borderRadius={26}
                backgroundColor={ColorTheme.darkGray3}
                children={
                  <Image
                    source={arrowUpRightImg}
                    style={{ width: 32, height: 32 }}
                  />
                }
              />

              <Text
                style={{
                  color: ColorTheme.white,
                  fontSize: 12,
                  fontWeight: "700",
                  marginTop: 5,
                }}
              >
                Send
              </Text>
            </View>

            <View style={{ alignItems: "center" }}>
              <SmallCircleContainer
                height={56}
                width={56}
                borderRadius={26}
                backgroundColor={ColorTheme.darkGray3}
                children={
                  <Image
                    source={exchnageImg}
                    style={{ width: 32, height: 32 }}
                  />
                }
              />
              <Text
                style={{
                  color: ColorTheme.white,
                  fontSize: 12,
                  fontWeight: "700",
                  marginTop: 5,
                }}
              >
                Convert
              </Text>
            </View>
          </View>

          {/**************************** INFLOW /OUTFLOW **********************/}
          <View
            style={{
              flexDirection: "row",
              height: 68,
              width: 329,
              backgroundColor: ColorTheme.darkGray3,
              borderRadius: 18,
              paddingHorizontal: 16,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: ColorTheme.inflowGreen,
                    marginRight: 5,
                  }}
                ></View>
                <Text style={{ color: ColorTheme.lightGray3, fontSize: 12 }}>
                  Inflow
                </Text>
              </View>
              <Text
                style={{
                  color: ColorTheme.white,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {" "}
                ₦100,000.00
              </Text>
            </View>

            <Image source={dividerImg} style={{ width: 1, height: 36 }} />

            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: ColorTheme.outflowOrange,
                    marginRight: 5,
                  }}
                ></View>
                <Text style={{ color: ColorTheme.lightGray3, fontSize: 12 }}>
                  Outflow
                </Text>
              </View>
              <Text
                style={{
                  color: ColorTheme.white,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {" "}
                ₦36,000.00
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/************************** feature cards **********************************************/}
      <View
        style={{
          flexDirection: "row",
          marginTop: 24,
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <SmallCircleContainer
            height={56}
            width={56}
            borderRadius={23}
            backgroundColor={ColorTheme.white}
            children={
              <Image source={pencilImg} style={{ width: 24, height: 24 }} />
            }
          />
          <Text
            style={{
              fontSize: 12,
              color: ColorTheme.darkGray2,
              fontWeight: "400",
              marginRight: 10,
            }}
          >
            Request
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <SmallCircleContainer
            height={56}
            width={56}
            borderRadius={23}
            backgroundColor={ColorTheme.white}
            children={
              <Image source={user02Img} style={{ width: 24, height: 24 }} />
            }
          />
          <Text
            style={{
              fontSize: 12,
              color: ColorTheme.darkGray2,
              fontWeight: "400",
              marginRight: 10,
            }}
          >
            SplitPay
            <Text
              style={{
                fontSize: 5,
                position: "relative",
                top: -9,
              }}
            >
              TM
            </Text>
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <SmallCircleContainer
            height={56}
            width={56}
            borderRadius={23}
            backgroundColor={ColorTheme.white}
            children={
              <Image source={payBillImg} style={{ width: 24, height: 24 }} />
            }
          />
          <Text
            style={{
              fontSize: 12,
              color: ColorTheme.darkGray2,
              fontWeight: "400",
              marginRight: 10,
            }}
          >
            Pay Bill
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <SmallCircleContainer
            height={56}
            width={56}
            borderRadius={23}
            backgroundColor={ColorTheme.white}
            children={
              <Image source={exchnage02} style={{ width: 24, height: 24 }} />
            }
          />
          <Text
            style={{
              fontSize: 12,
              color: ColorTheme.darkGray2,
              fontWeight: "400",
              marginRight: 10,
            }}
          >
            Swap
          </Text>
        </View>
      </View>

      {/*************************** carousel slide ************************/}
      <Carousel
        loop
        width={width}
        style={{ alignSelf: "center" }}
        height={ww(160)}
        ref={carouselRef}
        onScroll={handleScroll}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => {
          setCurrentIndex(index);

          console.log("current index:", index);
        }}
        renderItem={({ index }) => <HomeCarouselCard key={index} />}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        {renderIndicators()}
      </View>

      {/************************* TRANSACTION ACTIVITIES********************************** */}
      <View style={{ marginTop: ww(24) }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", gap: ww(3) }}
        >
          <View
            style={{
              height: ww(8),
              borderRadius: 10,
              backgroundColor: ColorTheme.lightBlue2,
              width: ww(8),
            }}
          ></View>
          <Text style={{ fontSize: ww(16), fontWeight: "700" }}>
            Recent Activities
          </Text>
        </View>

        <View style={{justifyContent:"center", alignItems:"center", paddingVertical:ww(67)}}>
          <Text>No Activity yet.</Text>
        </View>
      </View>


    </View>
  );
};

export default FinanceScreen;

const styles = StyleSheet.create({});
