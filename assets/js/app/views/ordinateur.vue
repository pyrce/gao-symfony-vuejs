
<template>
<v-card>
    <v-card-title>
        {{ ordinateur.nomPoste }}
    </v-card-title>
    <v-card-text>
        <v-row v-for="(horaire, key) in horaires" :key="key" class="horaire">
            <v-col cols="2"> {{ horaire.index }}h</v-col>
            <v-col cols="8">
                <span v-if="horaire.attribution">
                    {{ horaire.attribution.nomClient + " " + horaire.attribution.prenomClient }}
                </span>
            </v-col>
            <v-col cols="2">
               <RemoveAttribution v-if="horaire.attribution" :ordinateur="ordinateur" :attribution="horaire.attribution" :horaire="horaire.index"  />

                <addAttribution v-if="!horaire.attribution" :ordinateur="ordinateur" :horaire="horaire.index" :date="date" />
            </v-col>
        </v-row>
    </v-card-text>
</v-card>
</template>
<style>
.headline{
    color:blue;
}
.horaire{
    background-color: aquamarine;
    margin: 10px 0;
}
</style>
<script src="./ordinateur.js"></script>