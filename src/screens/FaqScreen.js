import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import Header from '../assets/components/Header';

const SECTIONS = [
  {
    question: 'Apa itu Novel Coronavirus (2019-nCoV)?',
    answer: `Novel coronavirus (2019-nCoV) adalah jenis baru coronavirus yang belum pernah diidentifikasi sebelumnya pada manusia. Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit pada manusia dan hewan. Pada manusia menyebabkan penyakit mulai flu biasa hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom Pernapasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS).Pada 11 Februari 2020, World Health Organization (WHO) mengumumkan nama penyakit yang disebabkan 2019-nCov, yaitu Coronavirus Disease (COVID-19).`
  },
  {
    question: 'Bagaimana cara mencegah penularan COVID-19?',
    answer: `Hingga saat ini, belum ada vaksin untuk mencegah penularan COVID-19.Salah satu cara yang bisa dilakukan untuk mencegah tertularnya virus ini adalah:
    1. Menjaga kesehatan dan kebugaran agar sistem imunitas/ kekebalan tubuh meningkat.
    2. Mencuci tangan menggunakan air dan sabun atau  hand-rub berbasis alkohol. Mencuci tangan sampai bersih selain dapat membunuh virus yang mungkin ada di tangan kita, tindakan ini juga merupakan salah satu tindakan yang mudah dan murah. Sekitar 98% penyebaran penyakit bersumber dari tangan. Karena itu, menjaga kebersihan tangan adalah hal yang sangat penting.
    3. Ketika batuk dan bersin, upayakan menjaga agar lingkungan Anda tidak tertular. Tutup hidung dan mulut Anda dengan tisu atau dengan lengan (bukan dengan telapak tangan).
   	4. Menjaga jarak saat berbicara dengan orang lain, sekurang- kurangnya satu meter, terutama dengan orang yang sedang menderita batuk, pilek/bersin dan demam. Saat seseorang terinfeksi penyakit saluran pernafasan, seperti 2019-nCoV, batuk/bersin dapat menghasilkan droplet yang mengandung virus. Jika kita terlalu dekat, virus tersebut dapat terhirup oleh kita.
    5. Hindari menyentuh mata, hidung dan mulut. Tangan menyentuh banyak hal yang dapat terkontaminasi virus. Jika kita menyentuh mata, hidung dan mulut dengan tangan yang terkontaminasi, maka virus dapat dengan mudah masuk ke tubuh kita.
    6.Gunakan masker penutup mulut dan hidung ketika Anda sakit atau saat berada di tempat umum.
    7.Buang tisu dan masker yang sudah digunakan ke tempat sampah, lalu cucilah tangan Anda.
    8. Hindari kontak dengan hewan ternak dan hewan liar yang terbukti tertular coronavirus.
    9. Jangan makan daging yang tidak dimasak hingga matang.
    10. Menunda perjalanan ke daerah/negara dimana virus ini ditemukan seperti Tiongkok, seiring dengan informasi adanya penghentian sementara operasional penerbangan langsung dari dan ke daratan Cina dari pemerintah, sampai ada informasi lebih lanjut.`
  },
  {
  	'question' : 'Apa saja gejala COVID-19?',
  	'answer' : `Gejala umum berupa demam ≥38C, batuk, pilek, nyeri tenggorokan dan sesak napas. Jika ada orang dengan gejala tersebut pernah melakukan perjalanan ke Tiongkok (terutama Wuhan), atau pernah merawat/kontak dengan penderita COVID-19, maka terhadap orang tersebut akan dilakukan pemeriksaan laboratorium lebih lanjut untuk memastikan diagnosisnya.`
  },
  {
  	'question' : 'Seberapa bahaya COVID-19 ini?',
  	'answer' : `Seperti penyakit pernapasan lainnya, infeksi 2019-nCoV dapat menyebabkan gejala ringan termasuk pilek, sakit tenggorokan, batuk, dan demam. Beberapa orang mungkin akan menderita sakit yang parah, seperti disertai pneumonia atau kesulitan bernafas. Walaupun fatalitas penyakit ini masih jarang, namun bagi orang yang berusia lanjut, dan orang-orang dengan kondisi medis yang sudah ada sebelumnya (seperti, diabetes dan penyakit jantung), mereka biasanya lebih rentan untuk menjadi sakit parah.`
  },
  {
  	'question' : 'Bagaimana manusia bisa terinfeksi COVID-19?',
  	'answer' : `Sampai saat ini, belum diketahui bagaimana manusia bisa terinfeksi virus ini. Para ahli masih sedang melakukan penyelidikan untuk menentukan sumber virus, jenis paparan, cara penularan dan pola klinis serta perjalanan penyakit. Hasil penyelidikan sementara dari beberapa institusi di kota Wuhan, sebagian kasus terjadi pada orang yang bekerja di pasar hewan/ikan, namun belum dapat dipastikan jenis hewan penular virus ini. Hingga saat ini dilaporkan adanya penularan antar manusia yang terbatas (antar keluarga dekat dan petugas kesehatan yang merawat kasus).`
  },
  {
  	'question' : 'Bisakah manusia terinfeksi novel coronavirus dari hewan?',
  	'answer' : `Saat ini sumber hewan penular COVID-19 belum diketahui, WHO terus menyelidiki berbagai kemungkinan jenis hewan penularnya. Sangat dimungkinkan hewan dari pasar hewan hidup di Tiongkok bertanggung jawab atas terinfeksinya manusia yang dilaporkan pertama kali. Untuk itu, disarankan pada saat berkunjung ke pasar hewan  hidup, hindari kontak langsung dengan hewan dan permukaan yang bersentuhan dengan hewan tanpa alat pelindung diri. Hindari juga konsumsi produk hewani mentah atau setengah matang. Penanganan daging mentah, susu, atau produk hewani harus diperhatikan, untuk menghindari kontaminasi silang dengan makanan mentah yang lain, lakukanlah dengan memperhatikan keamanan pangan yang baik.`
  },
  {
  	'question' : 'Benarkah COVID-19 berasal dari kelelawar atau hewan lainnya?',
  	'answer' : `Sampai saat ini hewan penular 2019-nCoV belum diketahui.`
  },
  {
  	'question' : 'Apakah COVID-19 dapat ditularkan antar manusia?',
  	'answer' : `Ya, COVID-19 dapat ditularkan dari orang ke orang, biasanya setelah kontak erat dengan pasien yang terinfeksi, misalnya, di tempat kerja, di rumah tangga, atau fasilitas pelayanan kesehatan.`
  },
  {
  	'question' : 'Berapa lama virus ini bertahan di permukaan benda?',
  	'answer' : `Sampai saat ini belum diketahui berapa lama 2019-nCoV bertahan di permukaan suatu benda, meskipun ada informasi awal yang menunjukkan dapat bertahan hingga beberapa jam. Namun desinfektan sederhana dapat membunuh virus tersebut sehingga tidak mungkin menginfeksi orang lagi.` 
  },
  {
  	'question' : 'Apakah sudah ada vaksin atau pengobatan spesifik untuk COVID-19?',
  	'answer' : `Belum ada vaksin atau pengobatan spesifik untuk virus ini. Namun, gejala yang disebabkan oleh virus ini dapat diobati. Oleh karena itu pengobatan harus didasarkan pada kondisi klinis pasien dan perawatan suportif dapat sangat efektif.`
  }
];

class FaqScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
    };
  }

  _renderHeader = section => {
    return (
	    <Animatable.View
		    duration={300}
		    transition="backgroundColor"
		    style={styles.cardTitle}
		>
		    <Text style={styles.titleText}>{section.question}</Text>
	    </Animatable.View>
    );
  };

  _renderContent = (section, i, isActive, sections) => {
    return (
    	<Animatable.View
	        duration={300}
	        transition="backgroundColor"
	        style={styles.cardAnswer}
	    >
	        <Animatable.Text
	          duration={500}
	          easing="ease-in-out"
	          style={styles.answerText}
	          animation={isActive ? 'slideInUp' : false}>
	          {section.answer}
        	</Animatable.Text>
      	</Animatable.View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Header style={styles.header}></Header>
        <ScrollView style={{flex: 1}}>
          <Accordion
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            underlayColor={'white'}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	header: {
	    top: 0,
	    left: 0,
	    height: 70,
	    position: 'relative',
	    right: 0,
  	},
	cardTitle: {
		width: '100%',
		height: 50,
		paddingLeft: '3%',
		marginBottom: 10,
		marginTop: 10,
		justifyContent: 'center',
		backgroundColor: 'white',
		elevation: 3,
	},
	cardAnswer: {
		justifyContent: 'center',
		elevation: 3,
	},
	answerText: {
		fontSize: 14,
		textAlign: 'center',
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: 15
	}
})

export default FaqScreen;
