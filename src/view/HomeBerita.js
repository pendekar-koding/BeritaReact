import {Text, View} from "react-native";
import Styles from "../styles/Styles";

function HomeBerita(){
        return (
            <View style={Styles.container}>
                <View style={Styles.list}>
                    <Text style={Styles.title}>Judul Berita</Text>
                    <Text style={Styles.subTitle}>Isi Berita React Native</Text>
                </View>
                <View style={Styles.list}>
                    <Text style={Styles.title}>Judul Berita</Text>
                    <Text style={Styles.subTitle}>Isi Berita React Native</Text>
                </View>
                <View style={Styles.list}>
                    <Text style={Styles.title}>Judul Berita</Text>
                    <Text style={Styles.subTitle}>Isi Berita React Native</Text>
                </View>
                <View style={Styles.list}>
                    <Text style={Styles.title}>Judul Berita</Text>
                    <Text style={Styles.subTitle}>Isi Berita React Native</Text>
                </View>
            </View>
        );
}

export default HomeBerita;