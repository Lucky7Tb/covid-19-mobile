import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Header from '../assets/components/Header';

class WorldDataScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            worldData: [],
            loading: true,
            modal: false,
            dataCountry: {
                country_name: '',
                confirmed: 0,
                recovered: 0,
                deaths: 0
            }
        };
    };

    getWorldData = async () => {
        try {
            const dirtyWorldData = await fetch("https://api.kawalcorona.com/", {
                "method": "GET",
            });
            const worldData = await dirtyWorldData.json();
            this.setState({
                worldData: worldData
            })
        } catch (error) {
            this.alert();
        } finally {
            this.hideLoading();
        }
    };

    keyExtractor = (item, index) => index.toString()

    renderWorldData = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.view}
                onPress={() => this.showData(item.attributes.Country_Region, item.attributes.Confirmed, item.attributes.Deaths, item.attributes.Recovered)}
            >
                <Text>{item.attributes.Country_Region}</Text>
            </TouchableOpacity>
        );
    }

    alert = () => Alert.alert(
        'Masalah saat mengambil data',
        'Silahkan coba lagi nanti',
    );

    hideLoading = () => this.setState({ loading: false });

    modal = () => this.setState({ modal: !this.state.modal });

    showData = (country_name, confirmed, deaths, recovered) => {
        this.setState({
            dataCountry: {
                country_name: country_name,
                confirmed: confirmed,
                deaths: deaths,
                recovered: recovered
            }
        });
        this.modal();
    }

    componentDidMount() {
        this.getWorldData();
    };

    render() {
        const { worldData } = this.state;
        const { dataCountry } = this.state;
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="rgba(55,180,224,1)" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Header style={styles.header} />
                <FlatList
                    style={styles.mainContent}
                    data={worldData}
                    renderItem={this.renderWorldData}
                    keyExtractor={this.keyExtractor}
                />

                <Modal
                    isVisible={this.state.modal}
                    onBackdropPress={this.modal}
                    onBackButtonPress={this.modal}
                >
                    <View style={{ width: '100%', height: '35%', backgroundColor: 'white' }}>

                        <Text style={{ alignSelf: 'center', fontWeight: 'bold', marginTop: '5%', fontSize: 20 }}>{dataCountry.country_name}</Text>

                        <View style={styles.dataCountryContainer}>

                            <View style={{ marginLeft: '3%' }}>
                                <Text>Sembuh :</Text>
                                <Text>{dataCountry.recovered}</Text>
                            </View>

                            <View>
                                <Text>Positif :</Text>
                                <Text>{dataCountry.confirmed}</Text>
                            </View>

                            <View style={{ marginRight: '3%' }}>
                                <Text>Meninggal :</Text>
                                <Text>{dataCountry.deaths}</Text>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    view: {
        height: 50,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    dataCountryContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    },
    header: {
        top: 0,
        left: 0,
        height: 70,
        position: 'relative',
        right: 0,
    },
})

export default WorldDataScreen;
