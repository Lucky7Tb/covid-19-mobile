import React, { Component } from 'react';
import { View, Text, BackHandler, Alert, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class ScreenOne extends Component {

    constructor(props) {
        super(props);
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

    nextQuestion = (condition) => {
        this.props.navigation.navigate('ScreenTwo', {
            isFever: condition
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
                    source={require('../../assets/images/demam_tinggi.png')}
                    style={styles.image}
                />
                <View style={styles.questionContainer}>
                    <Text numberOfLines={2} style={styles.textQuestionsContainer}>
                        Apakah terdapat 
                        <Text style={styles.bold}> demam </Text>
                        dengan 
                        <Text style={styles.bold}> Suhu di atas 38 </Text> 
                        derajat Celcius?
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                  
                    <TouchableOpacity
                        style={styles.yesButtonContainer}
                        onPress={() => this.nextQuestion(true)}
                    >
                        <Text style={styles.answerText}>IYA</Text>
                    </TouchableOpacity>
                
                   
                    <TouchableOpacity
                        style={styles.noButtonContainer}
                        onPress={() => this.nextQuestion(false)}
                    >
                        <Text style={styles.answerText}>TIDAK</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

export default ScreenOne;
