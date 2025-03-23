
#include <stdio.h>

void convertirMoneda(float cantidad, int monedaOrigen, int monedaDestino) {
    float tasaGTQtoUSD = 0.13; // 1 Quetzal = 0.13 Dólares
    float tasaGTQtoEUR = 0.12; // 1 Quetzal = 0.12 Euros
    float tasaUSDtoEUR = 0.92; // 1 Dólar = 0.92 Euros
    float tasaEURtoUSD = 1.09; // 1 Euro = 1.09 Dólares
    float tasaUSDtoGTQ = 7.85; // 1 Dólar = 7.85 Quetzales
    float tasaEURtoGTQ = 8.50; // 1 Euro = 8.50 Quetzales

    float resultado = 0.0;

    if (monedaOrigen == monedaDestino) {
        printf("La moneda de origen y destino son las mismas. No hay conversión.\n");
        return;
    }

    // Conversión de moneda
    if (monedaOrigen == 1) { // Quetzales
        if (monedaDestino == 2) resultado = cantidad * tasaGTQtoUSD;
        if (monedaDestino == 3) resultado = cantidad * tasaGTQtoEUR;
    } else if (monedaOrigen == 2) { // Dólares
        if (monedaDestino == 1) resultado = cantidad * tasaUSDtoGTQ;
        if (monedaDestino == 3) resultado = cantidad * tasaUSDtoEUR;
    } else if (monedaOrigen == 3) { // Euros
        if (monedaDestino == 1) resultado = cantidad * tasaEURtoGTQ;
        if (monedaDestino == 2) resultado = cantidad * tasaEURtoUSD;
    }

    // Mostrar resultado
    printf("Resultado: %.2f\n", resultado);
}

int main() {
    int opcion, monedaOrigen, monedaDestino;
    float cantidad;

    do {
        printf("\n--- Conversor de Monedas ---\n");
        printf("1. Quetzales (GTQ)\n");
        printf("2. Dólares (USD)\n");
        printf("3. Euros (EUR)\n");
        printf("Seleccione la moneda de origen (1-3): ");
        scanf("%d", &monedaOrigen);

        printf("Seleccione la moneda de destino (1-3): ");
        scanf("%d", &monedaDestino);

        printf("Ingrese la cantidad a convertir: ");
        scanf("%f", &cantidad);

        convertirMoneda(cantidad, monedaOrigen, monedaDestino);

        printf("¿Desea hacer otra conversión? (1 = Sí, 0 = No): ");
        scanf("%d", &opcion);
    } while (opcion == 1);

    printf("Gracias por usar el conversor de monedas. ¡Hasta luego!\n");

    return 0;
}
