import { StyleSheet } from "react-native";
import { COLORS, PADDING } from '../../outils/constantes'

const homeStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white'
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
    userName: {
        fontSize: 16
    },

    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },

    title: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    link:{
        // color: COLORS.main
    },
    title_space_between: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default homeStyles;