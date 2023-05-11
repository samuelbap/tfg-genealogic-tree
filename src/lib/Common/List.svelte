<script>
  import {
    documentId,
    documentType,
    protagonist,
    rootPerson,
  } from "../../server/serverMock.js";

  const id = documentId;
  const documentT = documentType;
  const Protagonistas = protagonist;
  const root = rootPerson;
</script>

<table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
  <thead class="ltr:text-left rtl:text-right">
    <tr>
      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Protagonistas
      </th>
      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Tipo de Documento
      </th>
      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Localización del Documento
      </th>
      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Libro
      </th>
      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Raiz Familiar
      </th>
      <th class="px-4 py-2" />
    </tr>
  </thead>

  <tbody class="divide-y divide-gray-200">
    <tr>
      <td
        class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900"
      >
        {protagonist[0].name} & {protagonist[1].name}
      </td>
      <td
        class="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-700"
        >{documentType}</td
      >
      <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700"
        >{documentId}</td
      >
      <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700"
        >idBokk</td
      >
      <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700"
        >{rootPerson[0]} {rootPerson[1]}</td
      >
      <td class="whitespace-nowrap px-4 py-2">
        <a
          href="#"
          class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          View
        </a>
      </td>
    </tr>
  </tbody>
</table>
