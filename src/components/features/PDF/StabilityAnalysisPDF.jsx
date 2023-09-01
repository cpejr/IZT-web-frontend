/* eslint-disable react/prop-types */
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

import ImageLogo from '../../../assets/IZTLogo.png';
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
    display: 'flex',
  },
  title: {
    fontSize: 24,
    textATextgn: 'center',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    textATextgn: 'justify',
  },
  section: {
    fontSize: 22,
    fontFamily: 'Montserrat',
    fontWeight: 600,
  },
  header: {
    display: 'flex',
    fontSize: 12,
    paddingBottom: 10,
    flexDirection: 'row',
    textATextgn: 'center',
    color: 'black',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    height: 'auto',
    justifyContent: 'flex-start',
    gap: 250,
  },
  image: {
    width: 200,
    height: 200,
  },
  item: {
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
  space: {
    display: 'flex',
    gap: 5,
  },
  collumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: 13,
    alignItems: 'flex-start',
    width: 370,
  },
  collumn2: {
    display: 'flex',
    flexDirection: 'column',
    gap: 70,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hr: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  izt: {
    width: 55,
    height: 35,
  },
  iztDiv: {
    display: 'grid',
    flexDirection: 'row',
    gap: 5,
    height: 35,
  },
  iztText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    alignSelf: 'center',
    color: 'rgb(32, 54, 153)',
    fontSize: 15,
  },
});

export default function StabilityAnalysisPDF({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <div style={styles.header} fixed>
          <Text style={styles.title} fixed>
            {data?.name}
          </Text>
          <div style={styles.iztDiv}>
            <Image style={styles.izt} src={ImageLogo} />
            <Text style={styles.iztText} fixed>
              iZT Core
            </Text>
          </div>
        </div>
        <View style={styles.hr} fixed />
        <div style={styles.row}>
          <div style={styles.collumn}>
            <Text style={styles.section}>Dados da análise</Text>

            <div style={styles.space}>
              <Text style={styles.item}>
                Processo retificação: {data?.rectificationProcess}
              </Text>
              <Text style={styles.item}>Máquina: {data?.machine} </Text>
              <Text style={styles.item}>
                Número da Máquina: {data?.machineNumber}
              </Text>
              <Text style={styles.item}>Operação: {data?.operation}</Text>
              <Text style={styles.item}>Departamento: {data?.department}</Text>
              <Text style={styles.item}>
                Responsável: {data?.responsiblePerson}
              </Text>
            </div>

            <Text style={styles.section}>Dados Da Máquina</Text>

            <div style={styles.space}>
              <Text style={styles.item}>
                Diâmetro do RC (máx): {data?.rcMaxDiameter} mm
              </Text>
              <Text style={styles.item}>
                Diâmetro do RC (min): {data?.rcMinDiameter} mm
              </Text>
              <Text style={styles.item}>
                Diâmetro do RA: {data?.raDiameter} mm
              </Text>
              <Text style={styles.item}>
                Comprimento RC: {data?.rcLength} mm
              </Text>
              <Text style={styles.item}>
                Comprimento RA: {data?.raLength} mm
              </Text>
              <Text style={styles.item}>
                Rotação do RC: {data?.rcRotation} mm
              </Text>
              <Text style={styles.item}>
                Rotação do RA: {data?.raRotation} mm
              </Text>
              <Text style={styles.item}>
                Inclinação RW: {data?.rwInclination}°
              </Text>
              <Text style={styles.item}>
                Comprimento efetivo RC: {data?.rcEffectiveLength} mm
              </Text>
            </div>

            <Text style={styles.section}>Dados do Produto</Text>

            <div style={styles.space}>
              <Text style={styles.item}>Produto: {data?.product} </Text>
              <Text style={styles.item}>
                Nº do produto: {data?.productNumber}
              </Text>
              <Text style={styles.item}>Diâmetro: {data?.diameter} mm</Text>
              <Text style={styles.item}>
                Comprimento total: {data?.totalLength} mm
              </Text>
              <Text style={styles.item}>
                Comprimento eletivo: {data?.electiveLength} mm
              </Text>
              <Text style={styles.item}>Sobremetal: {data?.allowance} mm</Text>
            </div>
          </div>
          <div style={styles.collumn2}>
            <Image style={styles.image} src={data?.processImage[0].url} />
            <Image style={styles.image} src={data?.partHeightImage[0].url} />
          </div>
        </div>
      </Page>
    </Document>
  );
}
