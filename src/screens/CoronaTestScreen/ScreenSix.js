import React, { Component } from 'react';
import { View, Text, BackHandler, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import styles from './styles';

class ScreenSix extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFever : this.props.navigation.getParam('isFever'),
            isCough : this.props.navigation.getParam('isCough'),
            isbreathless: this.props.navigation.getParam('isbreathless'),
            percentage: this.props.navigation.getParam('percentage')
        };
    }

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

    seeResult = (percentage) => {
        this.props.navigation.navigate('ScreenResult', {
            isFever: this.state.isFever,
            isCough:  this.state.isCough,
            isbreathless: this.state.isCough,
            percentage: this.state.percentage + percentage
        })
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMethod='scale'
                    resizeMode='center'
                    source={require('../../assets/images/berkomunikasi.png')}
                    style={styles.image}
                />
                <View style={styles.questionContainer}>
                    <Text numberOfLines={5} style={styles.textQuestionsContainer}>
                        Apakah terdapat riwayat
                        <Text style={styles.bold}> kontak </Text>
                        (berjabat tangan, mengobrol) dengan orang yang memiliki gejala
                        <Text style={styles.bold}> demam, batuk, dan pilek </Text> atau dengan orang
                        <Text style={styles.bold}> yang diduga terinfeksi </Text>
                        virus corona?
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                  
                    <TouchableOpacity
                        style={styles.yesButtonContainer}
                        onPress={() => this.seeResult(50)}
                    >
                        <Text style={styles.answerText}>IYA</Text>
                    </TouchableOpacity>
                
                   
                    <TouchableOpacity
                        style={styles.noButtonContainer}
                        onPress={() => this.seeResult(0)}
                    >
                        <Text style={styles.answerText}>TIDAK</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(55,180,224,1)'
    },
    questionContainer: {
        marginTop: '15%',
        marginLeft: '3%',
        width: '100%',
    },
    textQuestionsContainer: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 20,
        alignSelf: 'center'
    },
    answerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: 'center'
    },
    yesButtonContainer: {
        width: 100,
        height: 50,
        backgroundColor: 'blue',
        marginLeft: '10%',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2
    },
    noButtonContainer: {
        width: 100,
        height: 50,
        backgroundColor: 'blue',
        marginRight: '10%',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2
    },
    answerText:{
        alignSelf: 'center', 
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'white' 
    },
    image: {
        width: '50%',
        height: '40%',
        alignSelf: 'center',
    },
    bold: {
        fontWeight: 'bold',
    }
})

export default ScreenSix;
