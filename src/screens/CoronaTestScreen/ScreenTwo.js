import React, { Component } from 'react';
import { View, Text, BackHandler, Alert, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class ScreenTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFever : this.props.navigation.getParam('isFever')
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
        this.props.navigation.navigate('ScreenThree', {
            isFever: this.state.isFever,
            isCough: condition
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
                    source={require('../../assets/images/batuk.png')}
                    style={styles.image}
                />
                <View style={styles.questionContainer}>
                    <Text numberOfLines={1} style={styles.textQuestionsContainer}>
                        Apakah anda <Text style={styles.bold}>batuk?</Text>
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                    <View style={styles.yesButtonContainer}>
                        <TouchableOpacity
                            onPress={() => this.nextQuestion(true)}
                        >
                            <Text style={styles.answerText}>IYA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.noButtonContainer}>
                        <TouchableOpacity
                            onPress={ () => this.nextQuestion(false)}
                        >
                            <Text style={styles.answerText}>TIDAK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default ScreenTwo;
