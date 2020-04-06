import React, { Component } from 'react';
import { View, Text, BackHandler, Alert, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class ScreenThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFever : this.props.navigation.getParam('isFever'),
            isCough : this.props.navigation.getParam('isCough'),
            isbreathless: false
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

     nextQuestion = (condition) => {
        this.props.navigation.navigate('ScreenFour', {
            isFever: this.state.isFever,
            isCough:  this.state.isCough,
            isbreathless: condition
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
                    source={require('../../assets/images/sulit_bernafas.png')}
                    style={styles.image}
                />
                <View style={styles.questionContainer}>
                    <Text numberOfLines={2} style={styles.textQuestionsContainer}>
                        Apakah anda 
                        <Text style={styles.bold}> sesak napas </Text> 
                        sampai merasa 
                        <Text style={styles.bold}> kesulitan </Text> berbicara?
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

export default ScreenThree;
