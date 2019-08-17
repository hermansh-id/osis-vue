<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <!-- <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-green"
                                sub-title="924"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Performance"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
            </div> -->
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">

                <div class="col-xl-8">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-1 mb-1">PEMILIHAN</h6>
                                <h5 class="h3 mb-0">Jumlah suara calon</h5>
                            </div>
                        </div>
  <GChart
    type="ColumnChart"
    :data="chartData"
    :options="chartOptions"
  />
                    </card>
                </div>
                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h6 class="text-uppercase text-muted ls-1 mb-1">PEMILIHAN</h6>
                                <h5 class="h3 mb-0">Jumlah suara calon</h5>
                            </div>
                        </div>

                          <GChart
    type="PieChart"
    :data="chartData"
    :options="chartOptions"
  />
                    </card>
                </div>
            </div>
            <!-- End charts-->

            <!--Tables-->
            <div class="row mt-5">
                <div class="col-xl-12 mb-5 mb-xl-0">
                    <page-visits-table></page-visits-table>
                </div>
            </div>
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  import {db} from '../main.js';
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  // import DoughnutChart from '@/components/Charts/DoughnutChart';
  // import BarChart from '@/components/Charts/BarChart';

  // Tables
  import PageVisitsTable from './Dashboard/PageVisitsTable';
import { GChart } from 'vue-google-charts'

  export default {
    components: {
      // DoughnutChart,
      PageVisitsTable,
    GChart
    },
    firestore () {
      return {
        perolehan: db.collection('statistik').doc('stat')
      }
    },
    watch: {
    perolehan: function() {
      this.chartData[1][1] = this.perolehan['1'];
      this.chartData[2][1] = this.perolehan['2'];
      this.chartData[3][1] = this.perolehan['3'];
    }
  },
    data() {
      return {
          pemilih: {
            labels: ['INDRIYANI', 'FERTI', 'DEDE RIZKI'],
            datasets: [{
              label: 'Pemilih',
              data:  [4,7,0]
            }]
        },
         chartData: [
        ['PEROLEHAN SUARA', 'PEMILIH'],
        ['Indri Yani', 0],
        ['Ferti', 0],
        ['Dede Rizki', 0],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
        perolehan: [],
        calon: [],
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>
