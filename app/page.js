'use client';

import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS dari react-datepicker

export default function Page() {
  const [name, setName] = useState('');
  const [nameArr, setNameArr] = useState([]);
  const [birthDate, setBirthDate] = useState(new Date());
  const [birthDateArr, setBirthDateArr] = useState([]);
  const [recMedNumber, setRecMedNumber] = useState('');
  const [recMedNumberArr, setRecMedNumberArr] = useState([]);
  const [gender, setGender] = useState('laki-laki');
  const [genderArr, setGenderArr] = useState([]);
  const [num, setNum] = useState(0);
  const [numArr, setNumArr] = useState([]);
  const [isResultPage, setIsResultPage] = useState(false);
  const [divElements, setDivElements] = useState([]);

  const handleFormSubmit = (e) => {
    const elements = [];

    numArr.map((value, index) => {
      for (let i = 0; i < value; i++) {
        elements.push(
          <div className='px-1 py-1'>
            <div className="mycard" key={i}>
              <table border="0">
                {nameArr[index] !== '' ? (
                  <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>{nameArr[index]}</td>
                  </tr>
                ) : (
                  ''
                )}
                {birthDateArr[index] ? (
                  <tr>
                    <td>Tanggal Lahir</td>
                    <td>:</td>
                    <td>{birthDateArr[index]}</td>
                  </tr>
                ) : (
                  ''
                )}
                {recMedNumberArr[index] ? (
                  <tr>
                    <td>No Rec.Med</td>
                    <td>:</td>
                    <td>{recMedNumberArr[index]}</td>
                  </tr>
                ) : (
                  ''
                )}
                {genderArr[index] ? (
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>:</td>
                    <td>{genderArr[index]}</td>
                  </tr>
                ) : (
                  ''
                )}
              </table>
            </div>
          </div>
        );
      }
    });

    setDivElements(elements);
    setIsResultPage(true);
    // Proses data yang di-submit di sini
  };

  const deleteData = (idx) => {
    setNameArr((nameArr) => nameArr.filter((value, index) => index !== idx));
    setBirthDateArr((birthDateArr) =>
      birthDateArr.filter((value, index) => index !== idx)
    );
    setRecMedNumberArr((recMedNumberArr) =>
      recMedNumberArr.filter((value, index) => index !== idx)
    );
    setGenderArr((genderArr) =>
      genderArr.filter((value, index) => index !== idx)
    );
    setNumArr((numArr) => numArr.filter((value, index) => index !== idx));
  };

  return (
    <>
      {!isResultPage && (
        <>
          <div className="max-w-md mx-auto p-4 font-black shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Form Data Pasien</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium">
                  Nama:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-md w-full p-2 text-black font-light"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="birthDate" className="block font-medium">
                  Tanggal Lahir:
                </label>
                <DatePicker
                  selected={birthDate}
                  onChange={(date) => {
                    setBirthDate(date);
                  }}
                  dateFormat="dd/MM/yyyy"
                  className="border border-gray-300 rounded-md w-full p-2  text-black font-light"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="recMedNumber" className="block font-medium">
                  Nomor Rec.Med:
                </label>
                <input
                  type="text"
                  id="recMedNumber"
                  value={recMedNumber}
                  onChange={(e) => setRecMedNumber(e.target.value)}
                  className="border border-gray-300 rounded-md w-full p-2 text-black font-light"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium">Jenis Kelamin:</label>
                <div>
                  <label className="mr-2">
                    <input
                      type="radio"
                      name="gender"
                      value="Laki-laki"
                      checked={gender === 'Laki-laki'}
                      onChange={() => setGender('Laki-laki')}
                      className="mr-1"
                    />
                    Laki-laki
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Perempuan"
                      checked={gender === 'Perempuan'}
                      onChange={() => setGender('Perempuan')}
                      className="mr-1"
                    />
                    Perempuan
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="recMedNumber" className="block font-medium">
                  Jumlah label
                </label>
                <input
                  type="number"
                  id="number"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                  className="border border-gray-300 rounded-md w-full p-2 text-black font-light"
                />
              </div>
            </form>
            <button
              onClick={() => {
                const day = birthDate.getDate();
                const year = birthDate.getFullYear(); // Mengambil tahun
                const month = birthDate.getMonth() + 1;

                const dateValid = day + '-' + month + '-' + year;
                setNameArr((nameArr) => [...nameArr, name]);
                setBirthDateArr((birthDateArr) => [...birthDateArr, dateValid]);
                setRecMedNumberArr((recMedNumberArr) => [
                  ...recMedNumberArr,
                  recMedNumber,
                ]);
                setGenderArr((genderArr) => [...genderArr, gender]);
                setNumArr((numArr) => [...numArr, num]);
              }}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 mr-3"
            >
              Tambah
            </button>
            <button
              onClick={() => handleFormSubmit()}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
          <div className="text-center m-8 text-2xl">Daftar Data Label</div>
          <div className="flex justify-center">
            {nameArr.map((value, index) => {
              return (
                <div className="mycard" key={index}>
                  <table border="0">
                    {value !== '' ? (
                      <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{value}</td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {birthDateArr[index] ? (
                      <tr>
                        <td>Tanggal Lahir</td>
                        <td>:</td>
                        <td>{birthDateArr[index]}</td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {recMedNumberArr[index] ? (
                      <tr>
                        <td>No Rec.Med</td>
                        <td>:</td>
                        <td>{recMedNumberArr[index]}</td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {genderArr[index] ? (
                      <tr>
                        <td>Jenis Kelamin</td>
                        <td>:</td>
                        <td>{genderArr[index]}</td>
                      </tr>
                    ) : (
                      ''
                    )}
                    {numArr[index] ? (
                      <tr>
                        <td>Jumlah Copy</td>
                        <td>:</td>
                        <td>{numArr[index]} copy</td>
                      </tr>
                    ) : (
                      ''
                    )}
                  </table>
                  <div className="text-right">
                    <button
                      onClick={() => deleteData(index)}
                      className="bg-red-500 text-white py-1 px-1 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      {isResultPage && <div className="flex flex-wrap">{divElements}</div>}
    </>
  );
}
