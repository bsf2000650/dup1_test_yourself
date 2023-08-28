import React from 'react';
import mcqs from "../mcqs";
import shortQuestions from "../shortQuestions";
import longQuestions from '../longQuestions';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const CompletePaperPDFFile = ({ selectedMCQs, selectedShortQuestions, selectedLongQuestions }) => {
  return (
    <Document>
      <Page style={styles.page}>
      <View>
          <Text style={styles.mcqHeader}>
          Choose the best answer :
          </Text>
            {selectedMCQs.map((index, serialNumber) => (
                <View style={styles.mcqContainer}>
                  <Text style={styles.mcq}>
                    {`${serialNumber + 1}. ${mcqs[index].question}`}
                    <br />
                  </Text>
                  <View style={styles.optionContainer}>
                    {mcqs[index].options.map((option, optionIndex) => (
                      <Text style={styles.option} key={optionIndex}>
                        {option}
                      </Text>
                    ))}
                  </View>
                </View>
            ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Short Questions:</Text>
          {selectedShortQuestions.map((index, serialNumber) => (
            <Text key={index} style={styles.item}>
              {`${serialNumber + 1}. ${shortQuestions[index]}`}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Long Questions:</Text>
          {selectedLongQuestions.map((index, serialNumber) => (
            <Text key={index} style={styles.item}>
              {`${serialNumber + 1}. ${longQuestions[index]}`}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
    page: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
      },
      mcqHeader : {
        fontSize : '18px',
        marginBottom : '20px',
        fontWeight : 'bold',
      },
      mcq: {
        fontSize: 12,
        marginBottom: 10,
      },
      optionContainer: {
        display: 'flex',
        // alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginLeft: 15,
        marginBottom: 10,     // Adjust this value as needed
      },
      option: {
        width : '26%',
        fontSize: 12,
        // marginRight: 10,      // Add some spacing between options
      },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '0.5cm',
  },
  section: {
    marginBottom: '0.5cm',
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: '0.3cm',
  },
  item: {
    fontSize: 12,
    marginBottom: '0.2cm',
  },
});

export default CompletePaperPDFFile;
