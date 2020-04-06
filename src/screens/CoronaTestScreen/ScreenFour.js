import React, { Component } from 'react';
import { View, Text, BackHandler, Alert, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class ScreenFour extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFever : this.props.navigation.getParam('isFever'),
            isCough : this.props.navigation.getParam('isCough'),
            isbreathless: this.props.navigation.getParam('isbreathless'),
            percentage: 0
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

     nextQuestion = (percentage) => {
        this.props.navigation.navigate('ScreenFive', {
            isFever: this.state.isFever,
            isCough:  this.state.isCough,
            isbreathless: this.state.isCough,
            percentage: percentage
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
                    source={require('../../assets/images/bepergian.png')}
                    style={styles.image}
                />
                <View style={styles.questionContainer}>
                    <Text numberOfLines={3} style={styles.textQuestionsContainer}>
                        Apakah anda 
                        <Text style={styles.bold}> bepergian </Text> 
                        ke negara dengan wabah 
                        <Text style={styles.bold}> virus corona </Text> 
                        di luar <Text style={styles.bold}>Indonesia?</Text>
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                  
                    <TouchableOpacity
                        style={styles.yesButtonContainer}
                        onPress={() => this.nextQuestion(100)}
                    >
                        <Text style={styles.answerText}>IYA</Text>
                    </TouchableOpacity>
                
                   
                    <TouchableOpacity
                        style={styles.noButtonContainer}
                        onPress={() => this.nextQuestion(0)}
                    >
                        <Text style={styles.answerText}>TIDAK</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

export default ScreenFour;
