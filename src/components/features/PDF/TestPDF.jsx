/* esTextnt-disable react/prop-types */
import React from 'react';

import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
  View,
} from '@react-pdf/renderer';

import BGCourse from '../../../assets/accessDeniedPage/BGCourse.png';

import montserratLight from './fonts/Montserrat-Light.ttf';
import montserratSemiBold from './fonts/Montserrat-SemiBold.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [{ src: montserratLight, fontWeight: 'normal' }],
});
Font.register({
  family: 'Montserrat',
  fonts: [{ src: montserratSemiBold, fontWeight: 'semibold' }],
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: 'grid',
  },
  title: {
    fontSize: 24,
    textATextgn: 'center',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textATextgn: 'justify',
  },
  section: {
    fontSize: 22,
    fontFamily: 'Montserrat',
    fontWeight: 600,
  },
  header: {
    display: 'grid',
    fontSize: 12,
    marginBottom: 20,
    textATextgn: 'center',
    color: 'black',
    fontFamily: 'Montserrat',
    fontWeight: 600,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  item: {
    paddingLeft: 20,
    fontSize: 17,
    fontFamily: 'Montserrat',
  },
  space: {
    display: 'flex',
    gap: 5,
  },
  collumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  hr: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default function TestPDF({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div style={styles.header}>
          <Text style={styles.title} fixed>
            {data.title}
          </Text>
        </div>
        <View style={styles.hr} />
        <div style={styles.row}>
          <div style={styles.collumn}>
            <Text style={styles.section}>Dados Da Máquina</Text>

            <div style={styles.space}>
              <Text style={styles.item}>
                Diâmetro do RC (máx): {data.diametroRC} mm
              </Text>
              <Text style={styles.item}>
                Diâmetro do RC (min): {data.diametroRC} mm
              </Text>
              <Text style={styles.item}>
                Diâmetro do RA: {data.diametroRA} mm
              </Text>
              <Text style={styles.item}>
                Comprimento RC: {data.comprimentoRC} mm
              </Text>
              <Text style={styles.item}>
                Comprimento RA: {data.comprimentoRA} mm
              </Text>
              <Text style={styles.item}>
                Rotação do RC: {data.rotacaoRC} mm
              </Text>
              <Text style={styles.item}>
                Rotação do RA: {data.rotacaoRA} mm
              </Text>
              <Text style={styles.item}>
                Inclinação RW: {data.inclinacaoRW}°
              </Text>
              <Text style={styles.item}>
                Comprimento efetivo RC: {data.comprimentoEfetivo} mm
              </Text>
            </div>

            {/* Espaco */}
            <Text style={styles.section}>Dados da análise</Text>

            <div style={styles.space}>
              <Text style={styles.item}>
                Processo retificação:{data.processoRetificacao}
              </Text>
              <Text style={styles.item}>Máquina: {data.maquina} </Text>
              <Text style={styles.item}>Operação: {data.operacao}</Text>
              <Text style={styles.item}>Departamento: {data.departamento}</Text>
              <Text style={styles.item}>Responsável: {data.responsavel}</Text>
            </div>

            {/* Espaco */}
            <Text style={styles.section}>Dados do Produto</Text>

            <div style={styles.space}>
              <Text style={styles.item}>Produto: {data.produto} </Text>
              <Text style={styles.item}>Nº do produto: {data.nproduto} </Text>
              <Text style={styles.item}>Diâmetro: {data.diametro} mm</Text>
              <Text style={styles.item}>
                Comprimento total: {data.comprimentoTotal} mm
              </Text>
              <Text style={styles.item}>
                Comprimento eletivo: {data.comprimentoEletivo} mm
              </Text>
              <Text style={styles.item}>Sobremetal: {data.sobremetal} mm</Text>
            </div>
          </div>
          <div style={styles.collumn2}>
            <Image style={styles.image} src={BGCourse} />
          </div>
        </div>
      </Page>
    </Document>
  );
}
