import React, { Component } from 'react';
import { View, Text, BackHandler, Alert, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class ScreenFive extends Component {

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

    nextQuestion = (percentage) => {
        this.props.navigation.navigate('ScreenSix', {
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
                    source={require('../../assets/images/kontak_infeksi.png')}
                    style={styles.image}
                />
                <View style={styles.questionContainer}>
                    <Text numberOfLines={4} style={styles.textQuestionsContainer}>
                        Apakah terdapat riwayat
                        <Text style={styles.bold}> kontak </Text> 
                        (berjabat tangan, mengobrol) dengan orang yang
                        <Text style={styles.bold}> dinyatakan positif </Text> 
                        virus corona?
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

export default ScreenFive;
