<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Pemilih Online</h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Nama</th>
          <th>PIN</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.nama}}
          </th>
          <td>
            {{row.kode}}
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
import {db} from '../../main.js';
  export default {
    name: 'page-visits-table',
    data() {
      return {
        tableData: []
      }
    },
    firestore() {
      return{
        tableData: db.collection('pemilih').where('online', "==", true)
      }
    }
  }
</script>
<style>
</style>
