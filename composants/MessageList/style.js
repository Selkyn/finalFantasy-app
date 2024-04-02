import { StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
    messagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        marginTop: 15,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    messageImg: {
        width: 50,
        height: 50
    },
    messagesInfo: {
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
        backgroundColor: 'white',
    },
    name : {
        fontWeight: 'bold',
        color: COLORS.main
    },
    date_name: {
        fontSize: 12,
        marginBottom: 5
    }
    

});

export default styles;

