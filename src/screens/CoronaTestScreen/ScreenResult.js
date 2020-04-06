import React, { Component } from 'react';
import { View, Text, BackHandler, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

class ScreenResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFever : this.props.navigation.getParam('isFever'),
            isCough : this.props.navigation.getParam('isCough'),
            isbreathless: this.props.navigation.getParam('isbreathless'),
            percentage: this.props.navigation.getParam('percentage')
        };
    };

    handleBackButton = () => {
        Alert.alert(
            'Mengakhiri tes',
            'Ingin mengakhiri test', 
            [
                {
                    text: 'TIDAK',
                    style: 'cancel'
                }, 
                {
                    text: 'IYA',
                    onPress: () => this.props.navigation.navigate('App')
                },
            ], 
            {
                cancelable: true
            }
        )
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    render() {

        let golongan;
        let message = 'Stay At Home Ya!';
        if (this.state.percentage >= 100) {
            golongan = 'Tinggi';
            message = 'Segera Periksa Kedokter'
        } else if(this.state.percentage == 50){
            golongan = 'Sedang';
        }else{
            golongan = 'Rendah';
        }

        return (
            <View style={styles.container}>

                <View style={{marginTop: '50%'}}>
                    <Text 
                    style={{alignSelf: 'center', 'marginTop': '5%', ...styles.textQuestionsContainer}}>
                        Resiko anda tertular virus corona
                    </Text>

                    <Text style={{alignSelf: 'center', fontSize: 20, color: 'white', ...styles.bold}}>
                        Tergolong {golongan}!
                    </Text>
                      
                    <Animatable.Text
                      duration={1000}
                      easing="ease-in-out"
                      style={{alignSelf: 'center', fontSize: 30, color: 'white', ...styles.bold}}
                      animation={this.state.percentage >= 0 ? 'zoomIn': false}>
                      {message}
                    </Animatable.Text>
                       
                </View>

                <View style={styles.answerContainer}>
                   
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('App')}
                        style={styles.homeButtonContainer}
                    >
                        <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold', color: 'white' }}>HOME</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(55,180,224,1)',
    },
    questionContainer: {
        marginTop: '15%',
        marginLeft: '3%',
        width: '100%',
    },
    textQuestionsContainer: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 18,
        alignSelf: 'center'
    },
    answerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: "center",
        alignItems: 'center'
    },
    homeButtonContainer: {
        width: 100,
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2
    },
    bold: {
        fontWeight: 'bold',
    }
})

export default ScreenResult;
