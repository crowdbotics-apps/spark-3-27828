import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_1_2750}>
        <View style={styles.View_1_2751} />
        <View style={styles.View_1_2752}>
          <View style={styles.View_1_2753}>
            <View style={styles.View_1_2754}>
              <Text style={styles.Text_1_2754}>FLOWER</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c65/14bf/016ebfed8c09a67ec97231924e87fd3b"
            }}
            style={styles.ImageBackground_1_2755}
          />
        </View>
        <View style={styles.View_1_2759}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65c/f1ba/bc2e555d7569126cf35c3917d9d316bf"
            }}
            style={styles.ImageBackground_1_2760}
          />
          <View style={styles.View_1_2761}>
            <Text style={styles.Text_1_2761}>Georgina Roxalin</Text>
          </View>
          <View style={styles.View_1_2762}>
            <Text style={styles.Text_1_2762}>150 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_2763}>
          <View style={styles.View_1_2764}>
            <View style={styles.View_1_2765}>
              <Text style={styles.Text_1_2765}>Blackberry Kush</Text>
            </View>
            <View style={styles.View_1_2766}>
              <View style={styles.View_1_2767}>
                <Text style={styles.Text_1_2767}>5.0</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2768}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2770}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2772}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2774}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2776}
              />
            </View>
          </View>
          <View style={styles.View_1_2778}>
            <View style={styles.View_1_2779}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e367/b1ec/86bb7c2993a18ee60e8b421ad20f9cb3"
                }}
                style={styles.ImageBackground_1_2780}
              />
            </View>
            <View style={styles.View_1_2781}>
              <View style={styles.View_1_2782}>
                <View style={styles.View_1_2783}>
                  <Text style={styles.Text_1_2783}>Calm</Text>
                </View>
                <View style={styles.View_1_2784}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2785}
                  />
                  <View style={styles.View_1_2787}>
                    <View style={styles.View_1_2788}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_2789}
                      />
                      <View style={styles.View_1_2790} />
                      <View style={styles.View_1_2791} />
                      <View style={styles.View_1_2792} />
                      <View style={styles.View_1_2793} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2794}>
                <View style={styles.View_1_2795}>
                  <Text style={styles.Text_1_2795}>Relax</Text>
                </View>
                <View style={styles.View_1_2796}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2797}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_2799}
                  />
                </View>
              </View>
              <View style={styles.View_1_2801}>
                <View style={styles.View_1_2802}>
                  <Text style={styles.Text_1_2802}>Sleepy</Text>
                </View>
                <View style={styles.View_1_2803}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2804}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_2806}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_2808}
          />
          <View style={styles.View_1_2809}>
            <Text style={styles.Text_1_2809}>1 of 1</Text>
          </View>
          <View style={styles.View_1_2810}>
            <Text style={styles.Text_1_2810}>
              This flower is the perfect thing to smoke right before bed.
              It&#39;ll keep you in a deep, peaceful sleep, and you&#39;ll wake
              up to a calm and relaxing morning. One of my top favorites.
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_2811} />
        <View style={styles.View_1_2812}>
          <View style={styles.View_1_2813} />
          <View style={styles.View_1_2814}>
            <Text style={styles.Text_1_2814}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_2815}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_2816}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_2818}
          />
        </View>
        <View style={styles.View_1_2821}>
          <View style={styles.View_1_2822}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_2823}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_2825}
        />
      </View>
      <View style={styles.View_1_3206}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a09/8b3b/413a9874d3c07caf5b8d8b33775bdbb8"
          }}
          style={styles.ImageBackground_1_3207}
        />
        <View style={styles.View_1_3208}>
          <View style={styles.View_1_3209} />
          <View style={styles.View_1_3210}>
            <View style={styles.View_1_3211}>
              <Text style={styles.Text_1_3211}>Dispensaries</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e15f/899e/5f71bfe7a14abb3a4a6f46ce887021b1"
              }}
              style={styles.ImageBackground_1_3212}
            />
            <View style={styles.View_1_3214} />
          </View>
          <View style={styles.View_1_3215}>
            <View style={styles.View_1_3216}>
              <Text style={styles.Text_1_3216}>Canna Corner</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/591b/cf46/4443b48c5d3176b8aeda096673a67fe9"
              }}
              style={styles.ImageBackground_1_3217}
            />
            <View style={styles.View_1_3225} />
          </View>
          <View style={styles.View_1_3226}>
            <View style={styles.View_1_3227}>
              <Text style={styles.Text_1_3227}>Budtender Recs</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab83/e585/6b95bd6ff51252f9b36f99edc75c68bc"
              }}
              style={styles.ImageBackground_1_3228}
            />
          </View>
          <View style={styles.View_1_3233}>
            <View style={styles.View_1_3234}>
              <Text style={styles.Text_1_3234}>Search</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f982/1cc9/335a764ef0515e755876f2abfdef984a"
              }}
              style={styles.ImageBackground_1_3235}
            />
          </View>
        </View>
        <View style={styles.View_1_3237}>
          <View style={styles.View_1_3238} />
        </View>
      </View>
      <View style={styles.View_1_3239}>
        <View style={styles.View_1_3240} />
        <View style={styles.View_1_3241}>
          <View style={styles.View_1_3242} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/854b/8964/e3ff8fc10d57640cbb45d8c534837f9a"
            }}
            style={styles.ImageBackground_1_3243}
          />
        </View>
        <View style={styles.View_1_3248}>
          <View style={styles.View_1_3249} />
          <View style={styles.View_1_3254}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
              }}
              style={styles.ImageBackground_1_3255}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
              }}
              style={styles.ImageBackground_1_3259}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_1_3263}
            />
          </View>
          <View style={styles.View_1_3270}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
              }}
              style={styles.ImageBackground_1_3271}
            />
          </View>
        </View>
        <View style={styles.View_1_3272}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ab3/82ec/8777c7b631acafd6d247dad0f6751bda"
            }}
            style={styles.ImageBackground_1_3273}
          />
          <View style={styles.View_1_3274}>
            <View style={styles.View_1_3275}>
              <Text style={styles.Text_1_3275}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_3276}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a4/db5a/bdea9b92b5fa38134f2104f2bcedfe37"
            }}
            style={styles.ImageBackground_1_3277}
          />
          <View style={styles.View_1_3279}>
            <View style={styles.View_1_3280}>
              <Text style={styles.Text_1_3280}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_3281}>
        <View style={styles.View_1_3282} />
        <View style={styles.View_1_3283}>
          <View style={styles.View_1_3284} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2318/9131/44958314f1b1ebc5fe22ef05ec3e26f1"
            }}
            style={styles.ImageBackground_1_3285}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f08b/64b5/06da80b784c3032ea4b2d07c2fe24197"
            }}
            style={styles.ImageBackground_1_3286}
          />
        </View>
        <View style={styles.View_1_3289}>
          <Text style={styles.Text_1_3289}>Message Sent</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_1_2750: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.989071038251364%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2751: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2752: {
    width: wp("35.80008138020833%"),
    minWidth: wp("35.80008138020833%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("28.00546448087432%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2753: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_2754: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.5464480874316919%")
  },
  Text_1_2754: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_2755: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.800000000000004%"),
    top: hp("0%")
  },
  View_1_2759: {
    width: wp("45.86666666666667%"),
    height: hp("5.46448087431694%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_2760: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2761: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("0.5464480874316955%")
  },
  Text_1_2761: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2762: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("3.0054644808743163%")
  },
  Text_1_2762: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2763: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_2764: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2765: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2765: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2766: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.371584699453557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2767: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_2767: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2768: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2770: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  ImageBackground_1_2772: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%")
  },
  ImageBackground_1_2774: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_2776: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_2778: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.223860276852804%")
  },
  View_1_2779: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2780: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2781: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.00000000000001%"),
    top: hp("1.0931629952185773%")
  },
  View_1_2782: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2783: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2783: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2784: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2785: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2787: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2788: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2789: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2790: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2791: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999993%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2792: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333324%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2793: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666656%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2794: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2795: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2795: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2796: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218435%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2797: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2799: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2801: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.480874316939904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2802: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2802: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2803: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2804: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2806: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2808: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322405%")
  },
  View_1_2809: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.07650273224044%")
  },
  Text_1_2809: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2810: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2810: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2811: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551917%")
  },
  View_1_2812: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.78688524590163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2813: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2814: {
    width: wp("27.73333333333333%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%")
  },
  Text_1_2814: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2815: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("3.00546448087432%")
  },
  ImageBackground_1_2816: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2818: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.4123375064036878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9770019531250114%")
  },
  View_1_2821: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_1_2822: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2823: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2825: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_3206: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.4535519125683%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_3207: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_3208: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.1366120218579141%")
  },
  View_1_3209: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_3210: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3211: {
    width: wp("15.2%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_3211: {
    color: "rgba(57, 58, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_3212: {
    width: wp("5.333333333333334%"),
    height: hp("2.726548356436641%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%")
  },
  View_1_3214: {
    width: wp("3.0399998982747394%"),
    height: hp("1.639344262295082%"),
    top: hp("-0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000007%"),
    backgroundColor: "rgba(198, 44, 44, 1)"
  },
  View_1_3215: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3216: {
    width: wp("16.53333333333333%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_3216: {
    color: "rgba(57, 58, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_3217: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000085%")
  },
  View_1_3225: {
    width: wp("3.0399998982747394%"),
    height: hp("1.639344262295082%"),
    top: hp("-0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000004%"),
    backgroundColor: "rgba(198, 44, 44, 1)"
  },
  View_1_3226: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3227: {
    width: wp("18.666666666666668%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_3227: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_3228: {
    width: wp("5.334006754557292%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%")
  },
  View_1_3233: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3234: {
    width: wp("8%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_3234: {
    color: "rgba(57, 58, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_3235: {
    width: wp("5.333333333333334%"),
    height: hp("2.732224282019777%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%")
  },
  View_1_3237: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3238: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_3239: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3240: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_3241: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%")
  },
  View_1_3242: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_3243: {
    width: wp("24%"),
    height: hp("7.519830901766084%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_1_3248: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3249: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_1_3254: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("1.092896174863388%")
  },
  ImageBackground_1_3255: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288899739583343%"),
    top: hp("1.2750344198258194%")
  },
  ImageBackground_1_3259: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("1.2746675418374316%")
  },
  ImageBackground_1_3263: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303278%")
  },
  View_1_3270: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600008138020833%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_1_3271: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_3272: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("9.153005464480875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_3273: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8264556426168137%"),
    minHeight: hp("2.8264556426168137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.3661202185792352%")
  },
  View_1_3274: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333314%"),
    top: hp("-0.27322404371584774%"),
    backgroundColor: "rgba(198, 44, 44, 1)"
  },
  View_1_3275: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    top: hp("0.4098360655737707%")
  },
  Text_1_3275: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_3276: {
    width: wp("6.666666666666667%"),
    height: hp("3.8422131147540983%"),
    top: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_3277: {
    width: wp("6.666666666666667%"),
    height: hp("3.8422131147540983%"),
    top: hp("0.13661202185792298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_3279: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("-0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.13333333333334%"),
    backgroundColor: "rgba(198, 44, 44, 1)"
  },
  View_1_3280: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.4098360655737707%")
  },
  Text_1_3280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_3281: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("-9.562841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_3282: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 247, 238, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_3283: {
    width: wp("8.799999999999999%"),
    height: hp("4.508196721311475%"),
    top: hp("1.1383890454234962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222330729166657%")
  },
  View_1_3284: {
    width: wp("8.799999999999999%"),
    height: hp("4.508196721311475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(94, 183, 0, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_1_3285: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.6830601092896185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%")
  },
  ImageBackground_1_3286: {
    width: wp("3.4666666666666663%"),
    height: hp("1.366120218579235%"),
    top: hp("1.5938513917349724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%")
  },
  View_1_3289: {
    width: wp("24.266666666666666%"),
    top: hp("2.1857923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.35556640625%")
  },
  Text_1_3289: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
