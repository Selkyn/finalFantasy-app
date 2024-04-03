import { StyleSheet } from "react-native";
import { COLORS, PADDING } from '../../outils/constantes'


const styles = StyleSheet.create({
doctorsContainer: {
    marginTop: 15,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
},
doctorCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    elevation: 5,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginBottom: 20,
    borderRadius: 8
},
doctorImg: {
    width: 80,
    height: 80,
    borderRadius: 80/2,
    marginRight: 15
},
doctorName: {
    fontWeight: 'bold',
    fontSize: 16
},
spec:{
    backgroundColor: COLORS.main,
    padding: 5,
    borderRadius: 15,
    fontSize: 14,
    color: 'white',
    paddingHorizontal: PADDING.horizontal,
    marginTop: 5

}

});

export default styles;