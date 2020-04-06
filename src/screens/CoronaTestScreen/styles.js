const styles = {
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
}

export default styles;