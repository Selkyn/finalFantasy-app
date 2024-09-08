import { StyleSheet } from "react-native";
import { COLORS } from '../../outils/constantes';

const styles = StyleSheet.create({
    scrollableListItem: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        marginRight: 15,
        elevation: 1,
    },

    selectedItem: {
        backgroundColor: COLORS.main,
    },

    mainText: {
        fontWeight: 'bold',
        fontSize: 16
    },

    subText: {
        marginTop: 10,
        fontSize: 12
    }
})

export default styles;