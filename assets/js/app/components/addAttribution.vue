
<template>
<div>
     <v-btn
        color="primary"
        dark
        x-small
        @click.stop="dialog = true"
      >+</v-btn>

 <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">
           Ajout attribution
          </v-card-title>
          <v-autocomplete :loading="loading" :items="clients" :search-input.sync="search" v-model="client" item-text="composed" return-object cache-items hide-no-data hide-details label="Sélection le client">
             </v-autocomplete>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
            @click="attribuer"
            >
            Attribuer
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>
</div>
</template>

<script src="./addAttribution.js"></script>