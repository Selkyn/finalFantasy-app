import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
    charDetailImg: 
    {
        width: 200,
        height: 200
    },
    charDetailContainer: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    charDetailHistory: {
        marginTop: 15,
        marginBottom: 30,
    }
})

export default styles