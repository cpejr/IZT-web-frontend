/* eslint-disable react/prop-types */
import React from 'react';

import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';

import BGCourse from '../../../assets/accessDeniedPage/BGCourse.png';

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
});

export default function TestPDF({ user }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header} fixed>
          TESTE PDF
        </Text>
        <Text style={styles.text}>Nome: {user.nome}</Text>
        <Text style={styles.text}>Idade: {user.idade}</Text>
        <Text style={styles.text}>Profissão: {user.profissao}</Text>
        <Image style={styles.image} src={BGCourse} />
      </Page>
    </Document>
  );
}
