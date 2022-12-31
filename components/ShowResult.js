import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { DataTable } from "react-native-paper";

const ShowResults = ({ list }) => {

    const printItem = (item, index) => {
      return (
        <DataTable.Row>
          <DataTable.Cell style={styles.rankContainer}>
            {index + 1}
          </DataTable.Cell>
          <DataTable.Cell style={styles.nameContainer}>
            {item.user_name}
          </DataTable.Cell>
          <DataTable.Cell style={styles.scoreContainer}>
            {item.point}
          </DataTable.Cell>
        </DataTable.Row>
      );
    };

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={styles.rankContainer} > <Text style={styles.headerText} > Rank </Text> </DataTable.Title>
        <DataTable.Title style={styles.nameContainer} > <Text style={styles.headerText} > Name </Text></DataTable.Title>
        <DataTable.Title style={styles.scoreContainer} > <Text style={styles.headerText} > Score </Text></DataTable.Title>
      </DataTable.Header>
      
      {list.map( (item,index)=>printItem(item, index) )}


      <DataTable.Row>
        <DataTable.Cell style={styles.rankContainer} >2</DataTable.Cell>
        <DataTable.Cell style={styles.nameContainer}>MD TASHHIRUL ISLAM</DataTable.Cell>
        <DataTable.Cell style={styles.scoreContainer}>20</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={styles.rankContainer} >10</DataTable.Cell>
        <DataTable.Cell style={styles.nameContainer}>Pizza</DataTable.Cell>
        <DataTable.Cell style={styles.scoreContainer}>24</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default ShowResults;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1,
    justifyContent:"center",
    flexDirection:"column"
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  headerText:{
    color:"#07004D",
    fontWeight:"500",
    fontSize: 15,
  },
  rankContainer:{
    flex:0.2,
  },
  nameContainer:{
    flex:0.6,
  },
  scoreContainer:{
    flex:0.2,

  }

});
