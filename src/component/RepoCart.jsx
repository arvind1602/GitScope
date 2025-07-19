import React from "react";

function RepoCart({repodata}) {
  
  
  return (
    <div className="flow-root my-19">
      <dl className="-my-3 divide-y divide-gray-200 rounded border border-gray-200 text-sm dark:divide-gray-700 dark:border-gray-800">
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900 dark:text-white">Title</dt>

          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
            Detail
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900 dark:text-white">name</dt>

          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
            {repodata.name}
          </dd>
        </div>
         <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900 dark:text-white">Description</dt>

          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
           {repodata.description}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900 dark:text-white">
            Language
          </dt>

          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
            {repodata.language}
          </dd>
        </div>


        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900 dark:text-white">All details</dt>

          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
            <a href={repodata.url} className="text-amber-400">click here</a>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900 dark:text-white">stargazers count</dt>

          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
           {repodata.stargazers_count}
          </dd>
        </div>
         <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900 dark:text-white">watchers count</dt>

          <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
           {repodata.watchers_count}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default RepoCart;
