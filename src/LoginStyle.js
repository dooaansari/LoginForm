import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    headingStyle: {
        paddingTop: '3%',
        paddingBottom: '3%',
        fontSize: 20,
        color: '#FF00FF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        
        
    },
    textInputStyle: {
        width:'100%',
        fontSize: 15,
        color: '#000000',
        backgroundColor: '#C0C0C0',
        marginTop:'2%'
    },
    buttonStyle: {
        fontSize: 15,
        color: '#C0C0C0',
        backgroundColor: '#FF00FF',
        alignItems: 'center',
        marginTop:'2%',
        width:'40%',
        padding:'2%'
    },
    container:{
        flex:1,
        alignItems:'center',
        padding:'5%'

    }
    
})
export default styles