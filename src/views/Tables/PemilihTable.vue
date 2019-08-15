<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Nama Pemilih</th>
          <th>Username</th>
          <th>Kelas/Grup</th>
          <th>Telah Memilih</th>
          <th>Online</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.nama}}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            {{row.username}}
          </td>
          <td>
              <span class="status">{{row.grup}}</span>
          </td>
          <td>
              <span class="status">{{row.selesai}}</span>
          </td>

          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.online}}</span>
            </div>
          </td>
        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
         
      <base-pagination total="30"></base-pagination>
    </div>

  </div>
</template>
<script>
  import {db} from '../../main.js';
  export default {
    name: 'pemilih-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        tableData: [
        ],
        jumlah: null
      }
    },
    watch: {
      tableData: function(){
        this.tableData.length !== 0 ? 
        this.tableData.forEach(function(data){
          this.jumlah = data.pemilih 
        }) : null
      }
    },
    firestore () {
    return {
      tableData: db.collection('pemilih')
    }
  }
  }
</script>
<style>
</style>
