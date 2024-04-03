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
    // doctorsContainer: {
    //     marginTop: 15,
    //     paddingHorizontal: PADDING.horizontal,
    //     paddingVertical: PADDING.vertical,
    // },
    // doctorCard: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     backgroundColor: 'white',
    //     padding: 10,
    //     elevation: 5,
    //     paddingHorizontal: PADDING.horizontal,
    //     paddingVertical: PADDING.vertical,
    //     marginBottom: 20,
    //     borderRadius: 8
    // },
    // doctorImg: {
    //     width: 80,
    //     height: 80,
    //     borderRadius: 80/2,
    //     marginRight: 15
    // },
    // doctorName: {
    //     fontWeight: 'bold',
    //     fontSize: 16
    // },
    // spec:{
    //     backgroundColor: COLORS.main,
    //     padding: 5,
    //     borderRadius: 15,
    //     fontSize: 14,
    //     color: 'white',
    //     paddingHorizontal: PADDING.horizontal,
    //     marginTop: 5

    // }
})

export default homeStyles;