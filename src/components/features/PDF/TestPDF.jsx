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
  div: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
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

export default function TestPDF({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div style={styles.div}>
          <div>
            <Text style={styles.title} fixed>
              {data.title}
            </Text>
            <Text style={styles.text}>
              Diâmetro do RC (máx): {data.diametroRC} mm
            </Text>
            <Text style={styles.text}>
              Comprimento RC (máx): {data.comprimentoRC} mm
            </Text>
            <Text style={styles.text}>
              Inclinação RW: {data.inclinacaoRW}°{' '}
            </Text>
          </div>
          <Image style={styles.image} src={BGCourse} />
        </div>
      </Page>
    </Document>
  );
}
