import { Command } from '../help';
import { packageName } from '../../util/pkg-name';
import { limitOption, nextOption } from '../../util/arg-common';

export const certsCommand: Command = {
  name: 'certs',
  description:
    'Interact with SSL certificates. This command is intended for advanced use only. By default, Vercel manages your certificates automatically.',
  arguments: [
    {
      name: 'command',
      required: false,
    },
  ],
  subcommands: [
    {
      name: 'ls',
      description: 'Show all available certificates',
      arguments: [],
      options: [],
      examples: [],
    },
    {
      name: 'issue',
      description: ' Issue a new certificate for a domain',
      arguments: [
        {
          name: 'cn',
          required: true,
        },
      ],
      options: [],
      examples: [],
    },
    {
      name: 'rm',
      description: 'Remove a certificate by id',
      arguments: [
        {
          name: 'id',
          required: true,
        },
      ],
      options: [],
      examples: [],
    },
  ],
  options: [
    {
      name: 'challenge-only',
      description: 'Only show challenges needed to issue a cert',
      shorthand: null,
      type: String,
      deprecated: false,
    },
    {
      name: 'crt',
      description: 'Certificate file',
      argument: 'FILE',
      shorthand: null,
      type: String,
      deprecated: false,
    },
    {
      name: 'key',
      description: 'Certificate key file',
      argument: 'FILE',
      shorthand: null,
      type: String,
      deprecated: false,
    },
    {
      name: 'ca',
      description: 'CA certificate chain file',
      argument: 'FILE',
      shorthand: null,
      type: String,
      deprecated: false,
    },
    {
      ...limitOption,
      description:
        'Number of results to return per page (default: 20, max: 100)',
      argument: 'VALUE',
    },
    {
      ...nextOption,
      description: 'Show next page of results',
    },
    { name: 'overwrite', shorthand: null, type: Boolean, deprecated: false },
    { name: 'output', shorthand: null, type: String, deprecated: false },
  ],
  examples: [
    {
      name: 'Generate a certificate with the cnames "acme.com" and "www.acme.com"`',
      value: `${packageName} certs issue acme.com www.acme.com`,
    },
    {
      name: 'Remove a certificate',
      value: `${packageName} certs rm id`,
    },
    {
      name: 'Paginate results, where `1584722256178` is the time in milliseconds since the UNIX epoch.',
      value: `${packageName} certs ls --next 1584722256178`,
    },
  ],
};
