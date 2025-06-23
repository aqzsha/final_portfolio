'use client';

export default function Education() {
  return (
    <div className="mt-8 ">
      <h1 className="font-bold text-xl">Education</h1>
      <div className="mt-1 ml-4 flex justify-between">
        <div>
          <h2>Kazakh-British Technical University, Kazakhstan </h2>
          <p className="text-gray-500">
            Computer Science and Software Engineering, GPA: 3.4
          </p>
          <p className="ml-8 text-base font-semibold">
            Courses:{' '}
            <span className="text-sm font-normal text-gray-700">
              PP1(A*), PP2(A*), DSA(A*), DBMS(A-), OOP(A-), WebDev(A*), ICPC
              1(A-*), Django/Adv Django(B+), Spring(A-*), OS(A*), SFE(A*)
            </span>
          </p>
          <p className="ml-8 text-base font-semibold">
            Activities :{' '}
            <span className="text-sm font-normal text-gray-700">
              KBTU ACM-ICPC member
            </span>
          </p>
        </div>
        <div className="text-gray-400">2022-2026</div>
      </div>
      <div className="mt-1 ml-4 flex justify-between">
        <div>
          <h2>Zero to Mastery Academy </h2>
          <p className="text-gray-500">Full-Stack Developer</p>
        </div>
        <div className="text-gray-400">2023-2024</div>
      </div>
    </div>
  );
}
