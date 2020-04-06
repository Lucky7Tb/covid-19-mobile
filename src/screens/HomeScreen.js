import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, ActivityIndicator, Dimensions, Linking } from 'react-native';
import Button from '../assets/components/Button';
import Svg, { Ellipse } from 'react-native-svg';
import CardNews from '../assets/components/CardNews';
import Header from '../assets/components/Header';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataIndonesia: {},
      newsData: [],
      loading: true
    };
  }

  getIndonesiaData = async () => {
    try {
      const dirtyData = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=indonesia", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "5df4d53e20msh1afdc1d7dd4d457p19240cjsn2aa745e5ceee"
        }
      });
      const dataIndonesia = await dirtyData.json();
      this.setState({
        dataIndonesia: dataIndonesia.latest_stat_by_country[0],
      });
    } catch (error) {
      this.alert()
    } finally {
      this.hideLoading();
    }
  };

  getCoronaNews = async () => {
    try {
      const newsDirtyData = await fetch("https://newsapi.org/v2/top-headlines?q=covid-19&category=health&pageSize=5&country=ID&apiKey=0f1c27606fd34cecbb18d41af46b7d08", {
        "method": "GET"
      });
      const newsData = await newsDirtyData.json();
      this.setState({
        newsData: newsData.articles,
      });
    } catch (error) {
      this.alert();
    } finally {
      this.hideLoading();
    }
  };

  alert = () => Alert.alert(
    'Masalah saat mengambil data',
    'Silahkan coba lagi nanti',
  );

  hideLoading = () => this.setState({ loading: false });

  renderNewsItem = ({ item, index }) => {
    return (
      <CardNews
        image={item.urlToImage}
        title={item.title}
        description={item.description}
        linkToRead={() => Linking.openURL(item.url)}
        style={styles.cardNews}
      />
    );
  }

  componentDidMount() {
    this.getIndonesiaData();
    this.getCoronaNews();
  };

  render() {
    const { dataIndonesia } = this.state;
    const { newsData } = this.state;
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="rgba(55,180,224,1)" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Header style={styles.header}></Header>
        <View style={styles.mainContent}>
          <ScrollView
            contentContainerStyle={styles.mainContent_contentContainerStyle}>
            <View style={styles.dataCoronaSectionStack}>
              <View style={styles.dataCoronaSection}>
                <View style={styles.data}>
                  <View style={styles.dataTerkiniRow}>
                    <Text style={styles.dataTerkini}>Data Terkini</Text>
                    <Text style={styles.updateTime}>
                      {dataIndonesia.record_date}
                    </Text>
                  </View>
                  <View style={styles.dataSembuhRow}>
                    <View style={styles.sembuhBox}>
                      <Text style={styles.sembuh}>Sembuh</Text>
                      <View style={styles.dataContainer}>
                        <Text style={styles.dataCountSembuh}>
                          {dataIndonesia.total_recovered}
                        </Text>
                      </View>
                      <Text style={styles.orang}>Orang</Text>
                    </View>
                    <View style={styles.positifBox}>
                      <Text style={styles.positif}>Positif</Text>
                      <View style={styles.dataContainer}>
                        <Text style={styles.dataCountPositif}>
                          {dataIndonesia.total_cases}
                        </Text>
                      </View>
                      <Text style={styles.orang}>Orang</Text>
                    </View>
                    <View style={styles.meninggalBox}>
                      <Text style={styles.meninggal}>Meninggal</Text>
                      <View style={styles.dataContainer}>
                        <Text style={styles.dataCountMeninggal}>
                          {dataIndonesia.total_deaths}
                        </Text>
                      </View>
                      <Text style={styles.orang}>Orang</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.tesCoronaSection}>
                <View style={styles.backgroundCoronaTesStack}>
                  <View style={styles.backgroundCoronaTes}>
                    <View style={styles.titleTesColumn}>
                      <Text style={styles.titleTes}>
                        Cek Resiko Tertular Yuk !
                      </Text>
                      <Text style={styles.subTitleTes}>
                        Tes resiko virus corona
                      </Text>
                    </View>
                    <Button
                      style={styles.startTesButton}
                      text="Mulai"
                      onPress={() =>
                        this.props.navigation.navigate('CoronaTest')
                      }></Button>
                  </View>
                  <Svg viewBox="0 0 101.55 95.10" style={styles.ellipse}>
                    <Ellipse
                      strokeWidth={1}
                      fill="rgba(50,225,86,1)"
                      stroke="rgba(230, 230, 230,1)"
                      cx={51}
                      cy={48}
                      rx={50}
                      ry={47}></Ellipse>
                  </Svg>
                  <Svg viewBox="0 0 101.55 95.10" style={styles.ellipse1}>
                    <Ellipse
                      strokeWidth={1}
                      fill="rgba(50,225,86,1)"
                      stroke="rgba(230, 230, 230,1)"
                      cx={51}
                      cy={48}
                      rx={50}
                      ry={47}></Ellipse>
                  </Svg>
                </View>
              </View>
              <View style={styles.newsSection}>
                <Text style={styles.beritaTerkini}>Berita terkini</Text>
                <View style={styles.newsDataContainer}>
                  <Carousel
                    layout={'default'} layoutCardOffset={18}
                    loop={true}
                    ref={(c) => { this._carousel = c; }}
                    data={newsData}
                    renderItem={this.renderNewsItem}
                    sliderWidth={viewportWidth}
                    itemWidth={240}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardNews: {
    width: 280,
    height: 400
  },
  newsDetailsButton: {
    width: 50
  },
  footer: {
    left: 0,
    position: 'absolute',
    right: 0,
    bottom: 2327,
    height: 56,
  },
  mainContent: {
    top: 71,
    left: 0,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    right: 0,
  },
  mainContent_contentContainerStyle: {
    width: '100%',
    height: 950,
  },
  dataCoronaSection: {
    top: 0,
    width: '100%',
    height: 190,
    position: 'absolute',
  },
  data: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  dataTerkini: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    height: 20,
    width: 90,
    marginRight: '50%',
    fontWeight: 'bold'
  },
  updateTime: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    lineHeight: 15,
    height: 90,
    width: 200,
    marginTop: '5%',
    marginLeft: '25%',
  },
  dataTerkiniRow: {
    height: 15,
    flexDirection: 'row',
    flex: 1,
    marginRight: -160,
    marginLeft: '2%',
    marginTop: 20,
  },
  sembuh: {
    width: 55,
    height: 15,
    color: 'rgba(0,0,0,1)',
    fontSize: 13,
    lineHeight: 14,
    marginTop: 5,
    marginLeft: '20%',
  },
  orang: {
    width: 45,
    height: 15,
    color: 'rgba(0,0,0,1)',
    fontSize: 13,
    lineHeight: 14,
    marginTop: '-75%',
    marginRight: '20%',
    marginLeft: '26%',
  },
  sembuhBox: {
    width: 90,
    height: 80,
    backgroundColor: 'rgba(255,255,255,1)',
    margin: 25,
    marginTop: '5%',
    marginBottom: 10,
    marginLeft: '3%',
    borderRadius: 15,
    borderColor: 'rgba(129,122,122,1)',
    borderWidth: 2,
  },
  positifBox: {
    width: 90,
    height: 80,
    backgroundColor: 'rgba(255,255,255,1)',
    margin: 25,
    marginTop: '5%',
    marginBottom: -25,
    marginLeft: '3%',
    borderRadius: 15,
    borderColor: 'rgba(129,122,122,1)',
    borderWidth: 2,
    alignItems: 'flex-end',
  },
  meninggalBox: {
    width: 90,
    height: 80,
    backgroundColor: 'rgba(255,255,255,1)',
    margin: 25,
    marginTop: '5%',
    marginBottom: 10,
    marginLeft: '3%',
    borderRadius: 15,
    borderColor: 'rgba(129,122,122,1)',
    borderWidth: 2,
    alignItems: 'flex-end',
  },
  positif: {
    width: 45,
    height: 15,
    color: 'rgba(0,0,0,1)',
    fontSize: 13,
    lineHeight: 14,
    marginTop: 5,
    marginRight: '19%',
  },
  meninggal: {
    width: 63,
    height: 15,
    color: 'rgba(0,0,0,1)',
    fontSize: 13,
    lineHeight: 14,
    marginTop: 5,
    marginRight: 10,
  },
  dataContainer: {
    width: 35,
    height: 90,
    marginTop: '10%',
    marginRight: '30%',
    marginLeft: '26%',
  },
  dataCountPositif: {
    width: 90,
    height: 25,
    color: 'rgba(55,180,224,1)',
    fontSize: 20,
    lineHeight: 20,
    marginLeft: -5,
  },
  dataCountSembuh: {
    width: 90,
    height: 25,
    color: 'rgba(55,180,224,1)',
    fontSize: 20,
    lineHeight: 20,
  },
  dataCountMeninggal: {
    width: 90,
    height: 25,
    color: 'rgba(55,180,224,1)',
    fontSize: 20,
    lineHeight: 20,
  },
  dataSembuhRow: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    marginTop: 60,
    marginLeft: '5%'
  },
  tesCoronaSection: {
    top: 170,
    width: '100%',
    height: 231,
    position: 'absolute',
  },
  backgroundCoronaTes: {
    top: 1,
    width: '100%',
    height: 190,
    backgroundColor: 'rgba(230, 230, 230,0.5)',
    position: 'absolute',
  },
  titleTes: {
    width: 250,
    marginLeft: '10%',
    height: 15,
    color: 'rgba(0,0,0,1)',
    fontSize: 20,
    lineHeight: 20,
    alignItems: 'center'
  },
  subTitleTes: {
    color: 'rgba(0,0,0,1)',
    fontSize: 13,
    lineHeight: 14,
    marginTop: 20,
    alignItems: 'center'
  },
  titleTesColumn: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center'
  },
  startTesButton: {
    flex: 1,
    marginBottom: 48,
    marginTop: 27,
    marginLeft: 95,
    marginRight: 95,
  },
  ellipse: {
    top: 95,
    left: '90%',
    width: 102,
    height: 95,
    position: 'absolute',
    transform: [
      {
        rotate: '50.00deg',
      },
    ],
  },
  ellipse1: {
    top: 0,
    left: '-17%',
    width: 102,
    height: 95,
    position: 'absolute',
    transform: [
      {
        rotate: '65.00deg',
      },
    ],
  },
  backgroundCoronaTesStack: {
    width: '100%',
    height: 190,
    marginTop: 20,
  },
  newsSection: {
    top: 390,
    width: '100%',
    height: 400,
    position: 'absolute',
  },
  beritaTerkini: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
    marginTop: 21,
    marginLeft: 11,
    fontWeight: 'bold'
  },
  newsDataContainer: {
    width: 360,
    height: 500,
    marginTop: 20,
  },
  dataCoronaSectionStack: {
    width: '100%',
    height: 190,
  },
  header: {
    top: 0,
    left: 0,
    height: 70,
    position: 'absolute',
    right: 0,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
});

export default HomeScreen;
