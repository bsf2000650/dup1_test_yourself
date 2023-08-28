import React from 'react';
import mcqs from '../mcqs';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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
});

const MCQsPDFFile = ({ selectedMCQs, selectedShortQuestions, setSelectedLongQuestions }) => {
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
      </Page>
    </Document>
  );
};

export default MCQsPDFFile;
