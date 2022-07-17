import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import RenderHTML from 'react-native-render-html';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import { useNavigation } from '@react-navigation/native';
import { useAmbee } from '../ambee/hooks';
import Button2 from '../../components/button2';

const tbstyle = 'style="border: 1px solid black;border-collapse: collapse;"';

const HealthReport = () => {
    const date = ['10 July', '11 July', '12 July', '13 July'];
    const heartData = [100, 101, 80, 90];
    const steps = [10100, 10002, 9003, 7804];
    const spo2 = [98, 96, 97, 94];
    const sleeptime = [8, 7, 8, 9];

    const { data } = useAmbee();

    const aqi = data?.stations[0].AQI;
    const co = data?.stations[0].CO;
    const no2 = data?.stations[0].NO2;
    const ozone = data?.stations[0].OZONE;
    const pm10 = data?.stations[0].PM10;
    const pm25 = data?.stations[0].PM25;

    const html = `
    <div>
    <h1 style="text-align:center;">Aarogyacare Report</h1>
    <p>
        The Goal of the Mission is to improve the availability of and access to quality health care by people</p>
    <h3>GENERAL DATA</h3>
    <p>Weight: 60Kg</p>
    <p>Height: 170cm</p>
    <p>BMI: 20</p>
    <hr/>
    <h2>Environmental Aspects</h2>
    <p>Environmental pollutants can cause health problems like respiratory diseases, heart disease, and some types of cancer. People with low incomes are more likely to live in polluted areas and have unsafe drinking water. And children and pregnant women are at higher risk of health problems related to pollution.</p>
    <table>
        <tr>
            <th>Factors</th>
            <td>AQI</td>
            <td>CO</td>
            <td>NO2</td>
            <td>OZONE</td>
            <td>PM10</td>
            <td>PM25</td>
        </tr>
        <tr>
            <th>Values</th>
            <td>${aqi}</td>
            <td>${co}</td>
            <td>${no2}</td>
            <td>${ozone}</td>
            <td>${pm10}</td>
            <td>${pm25}</td>

        </tr>
    </table>
    <hr/>
    <h2>Heart Rate</h2>
    <p>A normal resting heart rate for adults ranges from 60 to 100 beats per minute. Generally, a lower heart rate at rest implies more efficient heart function and better cardiovascular fitness. For example, a well-trained athlete might have a normal resting heart rate closer to 40 beats per minute.</p>
    <table>
        <tr>
          <th>Date</th>
          ${date.map((d) => `<td>${d}</td>`)}
        </tr>
        <tr>
          <th>Heart Beats</th>
          ${heartData.map((d) => `<td>${d}</td>`)}    
        </tr>
    </table>
    <p>The Report shows that the heart rate shows some variablity</p>
      <hr/>
      <h2>Steps</h2>
      <p>According to a Harvard newsletter, to stay well, one should walk for 30 to 45 minutes nearly every day. Do it all at once or in chunks as short as five to 10 minutes, is advised by this expert too. Aim for a brisk pace of three to four miles an hour, and aim for two to four miles a day.</p>
      <table>

          <tr>
              <th>Date</th>
          ${date.map((d) => `<td>${d}</td>`)}
              
            </tr>
            <tr>
                <th>Steps</th>
          ${steps.map((d) => `<td>${d}</td>`)}
                
            </tr>
        </table>
        <p>The current data shows that the user is active</p>
        <hr/>
        <h2>SPO2</h2>
        <p>Simply put, your blood oxygen level (or SpO2 level) is the amount of oxygen in your blood. This health metric, which is often called the fifth vital sign, is important to monitor in people who have respiratory conditions, COVID-19 included.</p>
        <table>

            <tr>
                <th>Date</th>
          ${date.map((d) => `<td>${d}</td>`)}

              </tr>
              <tr>
                  <th>SpO2</th>
          ${spo2.map((d) => `<td>${d}</td>`)}

              </tr>
          </table>
          <p>The current data shows that the user is active</p>
          <hr/>
          <h2>Sleep</h2>
        <p>Sleep is essential to every process in the body, affecting our physical and mental functioning the next day, our ability to fight disease and develop immunity, and our metabolism and chronic disease risk. Sleep is truly interdisciplinary because it touches every aspect of health.</p>
        <table>

            <tr>
                <th>Date</th>
          ${date.map((d) => `<td>${d}</td>`)}
                
              </tr>
              <tr>
                  <th>Hrs</th>
          ${sleeptime.map((d) => `<td>${d}</td>`)}

              </tr>
          </table>
          <p>The current data shows that the user is active</p>
          <hr/>
       
        </div>
`;

    const [isPdfAvailable, setIsPdfAvailable] = useState(false);
    const navigation = useNavigation();
    const options = { html, fileName: 'test', directory: 'Documents' };
    const genPDF = async () => {
        const file = await RNHTMLtoPDF.convert(options);
        alert(file.filePath);
        setIsPdfAvailable(true);
    };

    return (
        <ScrollView style={{ padding: 15 }}>
            <RenderHTML contentWidth={210} source={{ html }} />
        </ScrollView>
    );
};

export default HealthReport;

const styles = StyleSheet.create({});
