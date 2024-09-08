import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const style = StyleSheet.create({
    item: {
        marginRight: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    itemImg: {
        width: 50, height: 50,
        marginRight: 5,
    },

})

export default style;