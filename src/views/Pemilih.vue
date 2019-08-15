<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <pemilih-table title="Pemilih Online"></pemilih-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import PemilihTable from './Tables/PemilihTable'
  export default {
    name: 'tables',
    components: {
      PemilihTable
    }
  };
</script>
<style></style>
